# `dataAwsccSagemakerEndpointConfig` Submodule <a name="`dataAwsccSagemakerEndpointConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerEndpointConfigA <a name="DataAwsccSagemakerEndpointConfigA" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/sagemaker_endpoint_config awscc_sagemaker_endpoint_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigA(Construct Scope, string Id, DataAwsccSagemakerEndpointConfigAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig">DataAwsccSagemakerEndpointConfigAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig">DataAwsccSagemakerEndpointConfigAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerEndpointConfigA resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSagemakerEndpointConfigA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSagemakerEndpointConfigA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSagemakerEndpointConfigA.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSagemakerEndpointConfigA.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccSagemakerEndpointConfigA resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSagemakerEndpointConfigA to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSagemakerEndpointConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/sagemaker_endpoint_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerEndpointConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.asyncInferenceConfig">AsyncInferenceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.dataCaptureConfig">DataCaptureConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference">DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.enableNetworkIsolation">EnableNetworkIsolation</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.endpointConfigArn">EndpointConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.endpointConfigName">EndpointConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.explainerConfig">ExplainerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.metricsConfig">MetricsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference">DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.productionVariants">ProductionVariants</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList">DataAwsccSagemakerEndpointConfigProductionVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.shadowProductionVariants">ShadowProductionVariants</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList">DataAwsccSagemakerEndpointConfigShadowProductionVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList">DataAwsccSagemakerEndpointConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference">DataAwsccSagemakerEndpointConfigVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AsyncInferenceConfig`<sup>Required</sup> <a name="AsyncInferenceConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.asyncInferenceConfig"></a>

```csharp
public DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference AsyncInferenceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference</a>

---

##### `DataCaptureConfig`<sup>Required</sup> <a name="DataCaptureConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.dataCaptureConfig"></a>

```csharp
public DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference DataCaptureConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference">DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference</a>

---

##### `EnableNetworkIsolation`<sup>Required</sup> <a name="EnableNetworkIsolation" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.enableNetworkIsolation"></a>

```csharp
public IResolvable EnableNetworkIsolation { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EndpointConfigArn`<sup>Required</sup> <a name="EndpointConfigArn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.endpointConfigArn"></a>

```csharp
public string EndpointConfigArn { get; }
```

- *Type:* string

---

##### `EndpointConfigName`<sup>Required</sup> <a name="EndpointConfigName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.endpointConfigName"></a>

```csharp
public string EndpointConfigName { get; }
```

- *Type:* string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; }
```

- *Type:* string

---

##### `ExplainerConfig`<sup>Required</sup> <a name="ExplainerConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.explainerConfig"></a>

```csharp
public DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference ExplainerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference</a>

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `MetricsConfig`<sup>Required</sup> <a name="MetricsConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.metricsConfig"></a>

```csharp
public DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference MetricsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference">DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference</a>

---

##### `ProductionVariants`<sup>Required</sup> <a name="ProductionVariants" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.productionVariants"></a>

```csharp
public DataAwsccSagemakerEndpointConfigProductionVariantsList ProductionVariants { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList">DataAwsccSagemakerEndpointConfigProductionVariantsList</a>

---

##### `ShadowProductionVariants`<sup>Required</sup> <a name="ShadowProductionVariants" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.shadowProductionVariants"></a>

```csharp
public DataAwsccSagemakerEndpointConfigShadowProductionVariantsList ShadowProductionVariants { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList">DataAwsccSagemakerEndpointConfigShadowProductionVariantsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.tags"></a>

```csharp
public DataAwsccSagemakerEndpointConfigTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList">DataAwsccSagemakerEndpointConfigTagsList</a>

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.vpcConfig"></a>

```csharp
public DataAwsccSagemakerEndpointConfigVpcConfigOutputReference VpcConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference">DataAwsccSagemakerEndpointConfigVpcConfigOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerEndpointConfigAConfig <a name="DataAwsccSagemakerEndpointConfigAConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigAConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/sagemaker_endpoint_config#id DataAwsccSagemakerEndpointConfigA#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerEndpointConfigAsyncInferenceConfig <a name="DataAwsccSagemakerEndpointConfigAsyncInferenceConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigAsyncInferenceConfig {

};
```


### DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig <a name="DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig {

};
```


### DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig <a name="DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig {

};
```


### DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig <a name="DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig {

};
```


### DataAwsccSagemakerEndpointConfigDataCaptureConfig <a name="DataAwsccSagemakerEndpointConfigDataCaptureConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigDataCaptureConfig {

};
```


### DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader <a name="DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader {

};
```


### DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions <a name="DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions {

};
```


### DataAwsccSagemakerEndpointConfigExplainerConfig <a name="DataAwsccSagemakerEndpointConfigExplainerConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigExplainerConfig {

};
```


### DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig <a name="DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig {

};
```


### DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig <a name="DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig {

};
```


### DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig <a name="DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig {

};
```


### DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig <a name="DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig {

};
```


### DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig <a name="DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig {

};
```


### DataAwsccSagemakerEndpointConfigMetricsConfig <a name="DataAwsccSagemakerEndpointConfigMetricsConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigMetricsConfig {

};
```


### DataAwsccSagemakerEndpointConfigProductionVariants <a name="DataAwsccSagemakerEndpointConfigProductionVariants" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariants.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigProductionVariants {

};
```


### DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig <a name="DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig {

};
```


### DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig <a name="DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig {

};
```


### DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools <a name="DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools {

};
```


### DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling <a name="DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling {

};
```


### DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy <a name="DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy {

};
```


### DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig <a name="DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig {

};
```


### DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig <a name="DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig {

};
```


### DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig <a name="DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig {

};
```


### DataAwsccSagemakerEndpointConfigShadowProductionVariants <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariants" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariants.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigShadowProductionVariants {

};
```


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig {

};
```


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig {

};
```


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools {

};
```


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling {

};
```


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy {

};
```


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig {

};
```


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig {

};
```


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig {

};
```


### DataAwsccSagemakerEndpointConfigTags <a name="DataAwsccSagemakerEndpointConfigTags" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigTags {

};
```


### DataAwsccSagemakerEndpointConfigVpcConfig <a name="DataAwsccSagemakerEndpointConfigVpcConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigVpcConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.maxConcurrentInvocationsPerInstance">MaxConcurrentInvocationsPerInstance</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxConcurrentInvocationsPerInstance`<sup>Required</sup> <a name="MaxConcurrentInvocationsPerInstance" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.maxConcurrentInvocationsPerInstance"></a>

```csharp
public double MaxConcurrentInvocationsPerInstance { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig</a>

---


### DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopic">ErrorTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.includeInferenceResponseIn">IncludeInferenceResponseIn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopic">SuccessTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorTopic`<sup>Required</sup> <a name="ErrorTopic" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopic"></a>

```csharp
public string ErrorTopic { get; }
```

- *Type:* string

---

##### `IncludeInferenceResponseIn`<sup>Required</sup> <a name="IncludeInferenceResponseIn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.includeInferenceResponseIn"></a>

```csharp
public string[] IncludeInferenceResponseIn { get; }
```

- *Type:* string[]

---

##### `SuccessTopic`<sup>Required</sup> <a name="SuccessTopic" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopic"></a>

```csharp
public string SuccessTopic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig</a>

---


### DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfig">NotificationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.s3FailurePath">S3FailurePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPath">S3OutputPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `NotificationConfig`<sup>Required</sup> <a name="NotificationConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfig"></a>

```csharp
public DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference NotificationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference</a>

---

##### `S3FailurePath`<sup>Required</sup> <a name="S3FailurePath" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.s3FailurePath"></a>

```csharp
public string S3FailurePath { get; }
```

- *Type:* string

---

##### `S3OutputPath`<sup>Required</sup> <a name="S3OutputPath" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPath"></a>

```csharp
public string S3OutputPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig</a>

---


### DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.clientConfig">ClientConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.outputConfig">OutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfig">DataAwsccSagemakerEndpointConfigAsyncInferenceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientConfig`<sup>Required</sup> <a name="ClientConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.clientConfig"></a>

```csharp
public DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference ClientConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference</a>

---

##### `OutputConfig`<sup>Required</sup> <a name="OutputConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.outputConfig"></a>

```csharp
public DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference OutputConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigAsyncInferenceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfig">DataAwsccSagemakerEndpointConfigAsyncInferenceConfig</a>

---


### DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference <a name="DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.csvContentTypes">CsvContentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.jsonContentTypes">JsonContentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader">DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CsvContentTypes`<sup>Required</sup> <a name="CsvContentTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.csvContentTypes"></a>

```csharp
public string[] CsvContentTypes { get; }
```

- *Type:* string[]

---

##### `JsonContentTypes`<sup>Required</sup> <a name="JsonContentTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.jsonContentTypes"></a>

```csharp
public string[] JsonContentTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader">DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader</a>

---


### DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList <a name="DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.get"></a>

```csharp
private DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference <a name="DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.captureMode">CaptureMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions">DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaptureMode`<sup>Required</sup> <a name="CaptureMode" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.captureMode"></a>

```csharp
public string CaptureMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions">DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions</a>

---


### DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.captureContentTypeHeader">CaptureContentTypeHeader</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference">DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.captureOptions">CaptureOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList">DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.destinationS3Uri">DestinationS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.enableCapture">EnableCapture</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.initialSamplingPercentage">InitialSamplingPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfig">DataAwsccSagemakerEndpointConfigDataCaptureConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaptureContentTypeHeader`<sup>Required</sup> <a name="CaptureContentTypeHeader" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.captureContentTypeHeader"></a>

```csharp
public DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference CaptureContentTypeHeader { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference">DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference</a>

---

##### `CaptureOptions`<sup>Required</sup> <a name="CaptureOptions" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.captureOptions"></a>

```csharp
public DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList CaptureOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList">DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList</a>

---

##### `DestinationS3Uri`<sup>Required</sup> <a name="DestinationS3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.destinationS3Uri"></a>

```csharp
public string DestinationS3Uri { get; }
```

- *Type:* string

---

##### `EnableCapture`<sup>Required</sup> <a name="EnableCapture" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.enableCapture"></a>

```csharp
public IResolvable EnableCapture { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InitialSamplingPercentage`<sup>Required</sup> <a name="InitialSamplingPercentage" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.initialSamplingPercentage"></a>

```csharp
public double InitialSamplingPercentage { get; }
```

- *Type:* double

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigDataCaptureConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfig">DataAwsccSagemakerEndpointConfigDataCaptureConfig</a>

---


### DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.contentTemplate">ContentTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.featureHeaders">FeatureHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.featuresAttribute">FeaturesAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.featureTypes">FeatureTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.labelAttribute">LabelAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.labelHeaders">LabelHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.labelIndex">LabelIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.maxPayloadInMb">MaxPayloadInMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.maxRecordCount">MaxRecordCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.probabilityAttribute">ProbabilityAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.probabilityIndex">ProbabilityIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentTemplate`<sup>Required</sup> <a name="ContentTemplate" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.contentTemplate"></a>

```csharp
public string ContentTemplate { get; }
```

- *Type:* string

---

##### `FeatureHeaders`<sup>Required</sup> <a name="FeatureHeaders" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.featureHeaders"></a>

```csharp
public string[] FeatureHeaders { get; }
```

- *Type:* string[]

---

##### `FeaturesAttribute`<sup>Required</sup> <a name="FeaturesAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.featuresAttribute"></a>

```csharp
public string FeaturesAttribute { get; }
```

- *Type:* string

---

##### `FeatureTypes`<sup>Required</sup> <a name="FeatureTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.featureTypes"></a>

```csharp
public string[] FeatureTypes { get; }
```

- *Type:* string[]

---

##### `LabelAttribute`<sup>Required</sup> <a name="LabelAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.labelAttribute"></a>

```csharp
public string LabelAttribute { get; }
```

- *Type:* string

---

##### `LabelHeaders`<sup>Required</sup> <a name="LabelHeaders" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.labelHeaders"></a>

```csharp
public string[] LabelHeaders { get; }
```

- *Type:* string[]

---

##### `LabelIndex`<sup>Required</sup> <a name="LabelIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.labelIndex"></a>

```csharp
public double LabelIndex { get; }
```

- *Type:* double

---

##### `MaxPayloadInMb`<sup>Required</sup> <a name="MaxPayloadInMb" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.maxPayloadInMb"></a>

```csharp
public double MaxPayloadInMb { get; }
```

- *Type:* double

---

##### `MaxRecordCount`<sup>Required</sup> <a name="MaxRecordCount" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.maxRecordCount"></a>

```csharp
public double MaxRecordCount { get; }
```

- *Type:* double

---

##### `ProbabilityAttribute`<sup>Required</sup> <a name="ProbabilityAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.probabilityAttribute"></a>

```csharp
public string ProbabilityAttribute { get; }
```

- *Type:* string

---

##### `ProbabilityIndex`<sup>Required</sup> <a name="ProbabilityIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.probabilityIndex"></a>

```csharp
public double ProbabilityIndex { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig</a>

---


### DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.enableExplanations">EnableExplanations</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.inferenceConfig">InferenceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.shapConfig">ShapConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableExplanations`<sup>Required</sup> <a name="EnableExplanations" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.enableExplanations"></a>

```csharp
public string EnableExplanations { get; }
```

- *Type:* string

---

##### `InferenceConfig`<sup>Required</sup> <a name="InferenceConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.inferenceConfig"></a>

```csharp
public DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference InferenceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference</a>

---

##### `ShapConfig`<sup>Required</sup> <a name="ShapConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.shapConfig"></a>

```csharp
public DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference ShapConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig</a>

---


### DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.numberOfSamples">NumberOfSamples</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.seed">Seed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.shapBaselineConfig">ShapBaselineConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.textConfig">TextConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.useLogit">UseLogit</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NumberOfSamples`<sup>Required</sup> <a name="NumberOfSamples" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.numberOfSamples"></a>

```csharp
public double NumberOfSamples { get; }
```

- *Type:* double

---

##### `Seed`<sup>Required</sup> <a name="Seed" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.seed"></a>

```csharp
public double Seed { get; }
```

- *Type:* double

---

##### `ShapBaselineConfig`<sup>Required</sup> <a name="ShapBaselineConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.shapBaselineConfig"></a>

```csharp
public DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference ShapBaselineConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference</a>

---

##### `TextConfig`<sup>Required</sup> <a name="TextConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.textConfig"></a>

```csharp
public DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference TextConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference</a>

---

##### `UseLogit`<sup>Required</sup> <a name="UseLogit" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.useLogit"></a>

```csharp
public IResolvable UseLogit { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig</a>

---


### DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.mimeType">MimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.shapBaseline">ShapBaseline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.shapBaselineUri">ShapBaselineUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.mimeType"></a>

```csharp
public string MimeType { get; }
```

- *Type:* string

---

##### `ShapBaseline`<sup>Required</sup> <a name="ShapBaseline" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.shapBaseline"></a>

```csharp
public string ShapBaseline { get; }
```

- *Type:* string

---

##### `ShapBaselineUri`<sup>Required</sup> <a name="ShapBaselineUri" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.shapBaselineUri"></a>

```csharp
public string ShapBaselineUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig</a>

---


### DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.granularity">Granularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.language">Language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Granularity`<sup>Required</sup> <a name="Granularity" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.granularity"></a>

```csharp
public string Granularity { get; }
```

- *Type:* string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.language"></a>

```csharp
public string Language { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig</a>

---


### DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.property.clarifyExplainerConfig">ClarifyExplainerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfig">DataAwsccSagemakerEndpointConfigExplainerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClarifyExplainerConfig`<sup>Required</sup> <a name="ClarifyExplainerConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.property.clarifyExplainerConfig"></a>

```csharp
public DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference ClarifyExplainerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigExplainerConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfig">DataAwsccSagemakerEndpointConfigExplainerConfig</a>

---


### DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.enableDetailedObservability">EnableDetailedObservability</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.enableEnhancedMetrics">EnableEnhancedMetrics</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.metricPublishFrequencyInSeconds">MetricPublishFrequencyInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfig">DataAwsccSagemakerEndpointConfigMetricsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableDetailedObservability`<sup>Required</sup> <a name="EnableDetailedObservability" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.enableDetailedObservability"></a>

```csharp
public IResolvable EnableDetailedObservability { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EnableEnhancedMetrics`<sup>Required</sup> <a name="EnableEnhancedMetrics" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.enableEnhancedMetrics"></a>

```csharp
public IResolvable EnableEnhancedMetrics { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MetricPublishFrequencyInSeconds`<sup>Required</sup> <a name="MetricPublishFrequencyInSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.metricPublishFrequencyInSeconds"></a>

```csharp
public double MetricPublishFrequencyInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigMetricsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfig">DataAwsccSagemakerEndpointConfigMetricsConfig</a>

---


### DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.capacityReservationPreference">CapacityReservationPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.mlReservationArn">MlReservationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig">DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CapacityReservationPreference`<sup>Required</sup> <a name="CapacityReservationPreference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.capacityReservationPreference"></a>

```csharp
public string CapacityReservationPreference { get; }
```

- *Type:* string

---

##### `MlReservationArn`<sup>Required</sup> <a name="MlReservationArn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.mlReservationArn"></a>

```csharp
public string MlReservationArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig">DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig</a>

---


### DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.destinationS3Uri">DestinationS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig">DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationS3Uri`<sup>Required</sup> <a name="DestinationS3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.destinationS3Uri"></a>

```csharp
public string DestinationS3Uri { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig">DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig</a>

---


### DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList <a name="DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.get"></a>

```csharp
private DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference <a name="DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.modelNameOverride">ModelNameOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools">DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `ModelNameOverride`<sup>Required</sup> <a name="ModelNameOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.modelNameOverride"></a>

```csharp
public string ModelNameOverride { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools">DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools</a>

---


### DataAwsccSagemakerEndpointConfigProductionVariantsList <a name="DataAwsccSagemakerEndpointConfigProductionVariantsList" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigProductionVariantsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.get"></a>

```csharp
private DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference <a name="DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.minInstanceCount">MinInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.scaleInPolicy">ScaleInPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling">DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.maxInstanceCount"></a>

```csharp
public double MaxInstanceCount { get; }
```

- *Type:* double

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.minInstanceCount"></a>

```csharp
public double MinInstanceCount { get; }
```

- *Type:* double

---

##### `ScaleInPolicy`<sup>Required</sup> <a name="ScaleInPolicy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.scaleInPolicy"></a>

```csharp
public DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference ScaleInPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling">DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling</a>

---


### DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference <a name="DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.cooldownInMinutes">CooldownInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.maximumStepSize">MaximumStepSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.strategy">Strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy">DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CooldownInMinutes`<sup>Required</sup> <a name="CooldownInMinutes" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.cooldownInMinutes"></a>

```csharp
public double CooldownInMinutes { get; }
```

- *Type:* double

---

##### `MaximumStepSize`<sup>Required</sup> <a name="MaximumStepSize" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.maximumStepSize"></a>

```csharp
public double MaximumStepSize { get; }
```

- *Type:* double

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.strategy"></a>

```csharp
public string Strategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy">DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy</a>

---


### DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference <a name="DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.capacityReservationConfig">CapacityReservationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSeconds">ContainerStartupHealthCheckTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.coreDumpConfig">CoreDumpConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.enableSsmAccess">EnableSsmAccess</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.inferenceAmiVersion">InferenceAmiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.initialInstanceCount">InitialInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.initialVariantWeight">InitialVariantWeight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.instancePools">InstancePools</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList">DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.managedInstanceScaling">ManagedInstanceScaling</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSeconds">ModelDataDownloadTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.modelName">ModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.routingConfig">RoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.serverlessConfig">ServerlessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.variantInstanceProvisionTimeoutInSeconds">VariantInstanceProvisionTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.variantName">VariantName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariants">DataAwsccSagemakerEndpointConfigProductionVariants</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CapacityReservationConfig`<sup>Required</sup> <a name="CapacityReservationConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.capacityReservationConfig"></a>

```csharp
public DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference CapacityReservationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference</a>

---

##### `ContainerStartupHealthCheckTimeoutInSeconds`<sup>Required</sup> <a name="ContainerStartupHealthCheckTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```csharp
public double ContainerStartupHealthCheckTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `CoreDumpConfig`<sup>Required</sup> <a name="CoreDumpConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.coreDumpConfig"></a>

```csharp
public DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference CoreDumpConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference</a>

---

##### `EnableSsmAccess`<sup>Required</sup> <a name="EnableSsmAccess" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.enableSsmAccess"></a>

```csharp
public IResolvable EnableSsmAccess { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InferenceAmiVersion`<sup>Required</sup> <a name="InferenceAmiVersion" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.inferenceAmiVersion"></a>

```csharp
public string InferenceAmiVersion { get; }
```

- *Type:* string

---

##### `InitialInstanceCount`<sup>Required</sup> <a name="InitialInstanceCount" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.initialInstanceCount"></a>

```csharp
public double InitialInstanceCount { get; }
```

- *Type:* double

---

##### `InitialVariantWeight`<sup>Required</sup> <a name="InitialVariantWeight" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.initialVariantWeight"></a>

```csharp
public double InitialVariantWeight { get; }
```

- *Type:* double

---

##### `InstancePools`<sup>Required</sup> <a name="InstancePools" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.instancePools"></a>

```csharp
public DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList InstancePools { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList">DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList</a>

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `ManagedInstanceScaling`<sup>Required</sup> <a name="ManagedInstanceScaling" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.managedInstanceScaling"></a>

```csharp
public DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference ManagedInstanceScaling { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference</a>

---

##### `ModelDataDownloadTimeoutInSeconds`<sup>Required</sup> <a name="ModelDataDownloadTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSeconds"></a>

```csharp
public double ModelDataDownloadTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.modelName"></a>

```csharp
public string ModelName { get; }
```

- *Type:* string

---

##### `RoutingConfig`<sup>Required</sup> <a name="RoutingConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.routingConfig"></a>

```csharp
public DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference RoutingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference</a>

---

##### `ServerlessConfig`<sup>Required</sup> <a name="ServerlessConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.serverlessConfig"></a>

```csharp
public DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference ServerlessConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference</a>

---

##### `VariantInstanceProvisionTimeoutInSeconds`<sup>Required</sup> <a name="VariantInstanceProvisionTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.variantInstanceProvisionTimeoutInSeconds"></a>

```csharp
public double VariantInstanceProvisionTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `VariantName`<sup>Required</sup> <a name="VariantName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.variantName"></a>

```csharp
public string VariantName { get; }
```

- *Type:* string

---

##### `VolumeSizeInGb`<sup>Required</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.volumeSizeInGb"></a>

```csharp
public double VolumeSizeInGb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigProductionVariants InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariants">DataAwsccSagemakerEndpointConfigProductionVariants</a>

---


### DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.prefixAwareRoutingConfig">PrefixAwareRoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.routingStrategy">RoutingStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig">DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrefixAwareRoutingConfig`<sup>Required</sup> <a name="PrefixAwareRoutingConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.prefixAwareRoutingConfig"></a>

```csharp
public DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference PrefixAwareRoutingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference</a>

---

##### `RoutingStrategy`<sup>Required</sup> <a name="RoutingStrategy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.routingStrategy"></a>

```csharp
public string RoutingStrategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig">DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig</a>

---


### DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.concurrencyThreshold">ConcurrencyThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.prefixLength">PrefixLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig">DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConcurrencyThreshold`<sup>Required</sup> <a name="ConcurrencyThreshold" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.concurrencyThreshold"></a>

```csharp
public double ConcurrencyThreshold { get; }
```

- *Type:* double

---

##### `PrefixLength`<sup>Required</sup> <a name="PrefixLength" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.prefixLength"></a>

```csharp
public double PrefixLength { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig">DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig</a>

---


### DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.maxConcurrency">MaxConcurrency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.memorySizeInMb">MemorySizeInMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.provisionedConcurrency">ProvisionedConcurrency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig">DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxConcurrency`<sup>Required</sup> <a name="MaxConcurrency" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.maxConcurrency"></a>

```csharp
public double MaxConcurrency { get; }
```

- *Type:* double

---

##### `MemorySizeInMb`<sup>Required</sup> <a name="MemorySizeInMb" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.memorySizeInMb"></a>

```csharp
public double MemorySizeInMb { get; }
```

- *Type:* double

---

##### `ProvisionedConcurrency`<sup>Required</sup> <a name="ProvisionedConcurrency" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.provisionedConcurrency"></a>

```csharp
public double ProvisionedConcurrency { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig">DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig</a>

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.capacityReservationPreference">CapacityReservationPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.mlReservationArn">MlReservationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig">DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CapacityReservationPreference`<sup>Required</sup> <a name="CapacityReservationPreference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.capacityReservationPreference"></a>

```csharp
public string CapacityReservationPreference { get; }
```

- *Type:* string

---

##### `MlReservationArn`<sup>Required</sup> <a name="MlReservationArn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.mlReservationArn"></a>

```csharp
public string MlReservationArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig">DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig</a>

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.destinationS3Uri">DestinationS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig">DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationS3Uri`<sup>Required</sup> <a name="DestinationS3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.destinationS3Uri"></a>

```csharp
public string DestinationS3Uri { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig">DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig</a>

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.get"></a>

```csharp
private DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.modelNameOverride">ModelNameOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools">DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `ModelNameOverride`<sup>Required</sup> <a name="ModelNameOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.modelNameOverride"></a>

```csharp
public string ModelNameOverride { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools">DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools</a>

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsList <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsList" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigShadowProductionVariantsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.get"></a>

```csharp
private DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.minInstanceCount">MinInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.scaleInPolicy">ScaleInPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling">DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.maxInstanceCount"></a>

```csharp
public double MaxInstanceCount { get; }
```

- *Type:* double

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.minInstanceCount"></a>

```csharp
public double MinInstanceCount { get; }
```

- *Type:* double

---

##### `ScaleInPolicy`<sup>Required</sup> <a name="ScaleInPolicy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.scaleInPolicy"></a>

```csharp
public DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference ScaleInPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling">DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling</a>

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.cooldownInMinutes">CooldownInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.maximumStepSize">MaximumStepSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.strategy">Strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy">DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CooldownInMinutes`<sup>Required</sup> <a name="CooldownInMinutes" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.cooldownInMinutes"></a>

```csharp
public double CooldownInMinutes { get; }
```

- *Type:* double

---

##### `MaximumStepSize`<sup>Required</sup> <a name="MaximumStepSize" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.maximumStepSize"></a>

```csharp
public double MaximumStepSize { get; }
```

- *Type:* double

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.strategy"></a>

```csharp
public string Strategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy">DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy</a>

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.capacityReservationConfig">CapacityReservationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSeconds">ContainerStartupHealthCheckTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.coreDumpConfig">CoreDumpConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.enableSsmAccess">EnableSsmAccess</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.inferenceAmiVersion">InferenceAmiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.initialInstanceCount">InitialInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.initialVariantWeight">InitialVariantWeight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.instancePools">InstancePools</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList">DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.managedInstanceScaling">ManagedInstanceScaling</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSeconds">ModelDataDownloadTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.modelName">ModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.routingConfig">RoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.serverlessConfig">ServerlessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.variantInstanceProvisionTimeoutInSeconds">VariantInstanceProvisionTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.variantName">VariantName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariants">DataAwsccSagemakerEndpointConfigShadowProductionVariants</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CapacityReservationConfig`<sup>Required</sup> <a name="CapacityReservationConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.capacityReservationConfig"></a>

```csharp
public DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference CapacityReservationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference</a>

---

##### `ContainerStartupHealthCheckTimeoutInSeconds`<sup>Required</sup> <a name="ContainerStartupHealthCheckTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```csharp
public double ContainerStartupHealthCheckTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `CoreDumpConfig`<sup>Required</sup> <a name="CoreDumpConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.coreDumpConfig"></a>

```csharp
public DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference CoreDumpConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference</a>

---

##### `EnableSsmAccess`<sup>Required</sup> <a name="EnableSsmAccess" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.enableSsmAccess"></a>

```csharp
public IResolvable EnableSsmAccess { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InferenceAmiVersion`<sup>Required</sup> <a name="InferenceAmiVersion" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.inferenceAmiVersion"></a>

```csharp
public string InferenceAmiVersion { get; }
```

- *Type:* string

---

##### `InitialInstanceCount`<sup>Required</sup> <a name="InitialInstanceCount" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.initialInstanceCount"></a>

```csharp
public double InitialInstanceCount { get; }
```

- *Type:* double

---

##### `InitialVariantWeight`<sup>Required</sup> <a name="InitialVariantWeight" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.initialVariantWeight"></a>

```csharp
public double InitialVariantWeight { get; }
```

- *Type:* double

---

##### `InstancePools`<sup>Required</sup> <a name="InstancePools" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.instancePools"></a>

```csharp
public DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList InstancePools { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList">DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList</a>

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `ManagedInstanceScaling`<sup>Required</sup> <a name="ManagedInstanceScaling" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.managedInstanceScaling"></a>

```csharp
public DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference ManagedInstanceScaling { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference</a>

---

##### `ModelDataDownloadTimeoutInSeconds`<sup>Required</sup> <a name="ModelDataDownloadTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSeconds"></a>

```csharp
public double ModelDataDownloadTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.modelName"></a>

```csharp
public string ModelName { get; }
```

- *Type:* string

---

##### `RoutingConfig`<sup>Required</sup> <a name="RoutingConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.routingConfig"></a>

```csharp
public DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference RoutingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference</a>

---

##### `ServerlessConfig`<sup>Required</sup> <a name="ServerlessConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.serverlessConfig"></a>

```csharp
public DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference ServerlessConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference</a>

---

##### `VariantInstanceProvisionTimeoutInSeconds`<sup>Required</sup> <a name="VariantInstanceProvisionTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.variantInstanceProvisionTimeoutInSeconds"></a>

```csharp
public double VariantInstanceProvisionTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `VariantName`<sup>Required</sup> <a name="VariantName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.variantName"></a>

```csharp
public string VariantName { get; }
```

- *Type:* string

---

##### `VolumeSizeInGb`<sup>Required</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.volumeSizeInGb"></a>

```csharp
public double VolumeSizeInGb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigShadowProductionVariants InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariants">DataAwsccSagemakerEndpointConfigShadowProductionVariants</a>

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.prefixAwareRoutingConfig">PrefixAwareRoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.routingStrategy">RoutingStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig">DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrefixAwareRoutingConfig`<sup>Required</sup> <a name="PrefixAwareRoutingConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.prefixAwareRoutingConfig"></a>

```csharp
public DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference PrefixAwareRoutingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference</a>

---

##### `RoutingStrategy`<sup>Required</sup> <a name="RoutingStrategy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.routingStrategy"></a>

```csharp
public string RoutingStrategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig">DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig</a>

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.concurrencyThreshold">ConcurrencyThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.prefixLength">PrefixLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig">DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConcurrencyThreshold`<sup>Required</sup> <a name="ConcurrencyThreshold" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.concurrencyThreshold"></a>

```csharp
public double ConcurrencyThreshold { get; }
```

- *Type:* double

---

##### `PrefixLength`<sup>Required</sup> <a name="PrefixLength" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.prefixLength"></a>

```csharp
public double PrefixLength { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig">DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig</a>

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.maxConcurrency">MaxConcurrency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.memorySizeInMb">MemorySizeInMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.provisionedConcurrency">ProvisionedConcurrency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig">DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxConcurrency`<sup>Required</sup> <a name="MaxConcurrency" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.maxConcurrency"></a>

```csharp
public double MaxConcurrency { get; }
```

- *Type:* double

---

##### `MemorySizeInMb`<sup>Required</sup> <a name="MemorySizeInMb" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.memorySizeInMb"></a>

```csharp
public double MemorySizeInMb { get; }
```

- *Type:* double

---

##### `ProvisionedConcurrency`<sup>Required</sup> <a name="ProvisionedConcurrency" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.provisionedConcurrency"></a>

```csharp
public double ProvisionedConcurrency { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig">DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig</a>

---


### DataAwsccSagemakerEndpointConfigTagsList <a name="DataAwsccSagemakerEndpointConfigTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.get"></a>

```csharp
private DataAwsccSagemakerEndpointConfigTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSagemakerEndpointConfigTagsOutputReference <a name="DataAwsccSagemakerEndpointConfigTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTags">DataAwsccSagemakerEndpointConfigTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTags">DataAwsccSagemakerEndpointConfigTags</a>

---


### DataAwsccSagemakerEndpointConfigVpcConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfigVpcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfig">DataAwsccSagemakerEndpointConfigVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointConfigVpcConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfig">DataAwsccSagemakerEndpointConfigVpcConfig</a>

---



