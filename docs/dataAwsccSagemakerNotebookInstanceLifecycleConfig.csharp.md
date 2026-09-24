# `dataAwsccSagemakerNotebookInstanceLifecycleConfig` Submodule <a name="`dataAwsccSagemakerNotebookInstanceLifecycleConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerNotebookInstanceLifecycleConfig <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/sagemaker_notebook_instance_lifecycle_config awscc_sagemaker_notebook_instance_lifecycle_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerNotebookInstanceLifecycleConfig(Construct Scope, string Id, DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig">DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig">DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerNotebookInstanceLifecycleConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSagemakerNotebookInstanceLifecycleConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSagemakerNotebookInstanceLifecycleConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSagemakerNotebookInstanceLifecycleConfig.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSagemakerNotebookInstanceLifecycleConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccSagemakerNotebookInstanceLifecycleConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSagemakerNotebookInstanceLifecycleConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSagemakerNotebookInstanceLifecycleConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/sagemaker_notebook_instance_lifecycle_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerNotebookInstanceLifecycleConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigArn">NotebookInstanceLifecycleConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigName">NotebookInstanceLifecycleConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.onCreate">OnCreate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList">DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.onStart">OnStart</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList">DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList">DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `NotebookInstanceLifecycleConfigArn`<sup>Required</sup> <a name="NotebookInstanceLifecycleConfigArn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigArn"></a>

```csharp
public string NotebookInstanceLifecycleConfigArn { get; }
```

- *Type:* string

---

##### `NotebookInstanceLifecycleConfigName`<sup>Required</sup> <a name="NotebookInstanceLifecycleConfigName" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigName"></a>

```csharp
public string NotebookInstanceLifecycleConfigName { get; }
```

- *Type:* string

---

##### `OnCreate`<sup>Required</sup> <a name="OnCreate" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.onCreate"></a>

```csharp
public DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList OnCreate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList">DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList</a>

---

##### `OnStart`<sup>Required</sup> <a name="OnStart" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.onStart"></a>

```csharp
public DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList OnStart { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList">DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.tags"></a>

```csharp
public DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList">DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/sagemaker_notebook_instance_lifecycle_config#id DataAwsccSagemakerNotebookInstanceLifecycleConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreate <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreate" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreate {

};
```


### DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStart <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStart" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStart"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStart.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStart {

};
```


### DataAwsccSagemakerNotebookInstanceLifecycleConfigTags <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfigTags" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerNotebookInstanceLifecycleConfigTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.get"></a>

```csharp
private DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreate">DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreate">DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreate</a>

---


### DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.get"></a>

```csharp
private DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStart">DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStart</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStart InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStart">DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStart</a>

---


### DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.get"></a>

```csharp
private DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTags">DataAwsccSagemakerNotebookInstanceLifecycleConfigTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerNotebookInstanceLifecycleConfigTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTags">DataAwsccSagemakerNotebookInstanceLifecycleConfigTags</a>

---



