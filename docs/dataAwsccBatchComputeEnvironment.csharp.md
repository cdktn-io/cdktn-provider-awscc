# `dataAwsccBatchComputeEnvironment` Submodule <a name="`dataAwsccBatchComputeEnvironment` Submodule" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBatchComputeEnvironment <a name="DataAwsccBatchComputeEnvironment" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/batch_compute_environment awscc_batch_compute_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironment(Construct Scope, string Id, DataAwsccBatchComputeEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig">DataAwsccBatchComputeEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig">DataAwsccBatchComputeEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBatchComputeEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBatchComputeEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBatchComputeEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBatchComputeEnvironment.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBatchComputeEnvironment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccBatchComputeEnvironment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBatchComputeEnvironment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBatchComputeEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/batch_compute_environment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBatchComputeEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.computeEnvironmentArn">ComputeEnvironmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.computeEnvironmentName">ComputeEnvironmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.computeResources">ComputeResources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.context">Context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.eksConfiguration">EksConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference">DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.replaceComputeEnvironment">ReplaceComputeEnvironment</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.serviceRole">ServiceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.unmanagedvCpus">UnmanagedvCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference">DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ComputeEnvironmentArn`<sup>Required</sup> <a name="ComputeEnvironmentArn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.computeEnvironmentArn"></a>

```csharp
public string ComputeEnvironmentArn { get; }
```

- *Type:* string

---

##### `ComputeEnvironmentName`<sup>Required</sup> <a name="ComputeEnvironmentName" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.computeEnvironmentName"></a>

```csharp
public string ComputeEnvironmentName { get; }
```

- *Type:* string

---

##### `ComputeResources`<sup>Required</sup> <a name="ComputeResources" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.computeResources"></a>

```csharp
public DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference ComputeResources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference</a>

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.context"></a>

```csharp
public string Context { get; }
```

- *Type:* string

---

##### `EksConfiguration`<sup>Required</sup> <a name="EksConfiguration" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.eksConfiguration"></a>

```csharp
public DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference EksConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference">DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference</a>

---

##### `ReplaceComputeEnvironment`<sup>Required</sup> <a name="ReplaceComputeEnvironment" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.replaceComputeEnvironment"></a>

```csharp
public IResolvable ReplaceComputeEnvironment { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ServiceRole`<sup>Required</sup> <a name="ServiceRole" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.serviceRole"></a>

```csharp
public string ServiceRole { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UnmanagedvCpus`<sup>Required</sup> <a name="UnmanagedvCpus" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.unmanagedvCpus"></a>

```csharp
public double UnmanagedvCpus { get; }
```

- *Type:* double

---

##### `UpdatePolicy`<sup>Required</sup> <a name="UpdatePolicy" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.updatePolicy"></a>

```csharp
public DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference UpdatePolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference">DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBatchComputeEnvironmentComputeResources <a name="DataAwsccBatchComputeEnvironmentComputeResources" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentComputeResources {

};
```


### DataAwsccBatchComputeEnvironmentComputeResourcesEc2Configuration <a name="DataAwsccBatchComputeEnvironmentComputeResourcesEc2Configuration" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2Configuration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentComputeResourcesEc2Configuration {

};
```


### DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplate <a name="DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplate" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplate {

};
```


### DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides <a name="DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides {

};
```


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProvider <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProvider" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProvider {

};
```


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization {

};
```


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate {

};
```


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations {

};
```


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements {

};
```


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration {

};
```


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration {

};
```


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration {

};
```


### DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicy <a name="DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicy" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicy {

};
```


### DataAwsccBatchComputeEnvironmentConfig <a name="DataAwsccBatchComputeEnvironmentConfig" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/batch_compute_environment#id DataAwsccBatchComputeEnvironment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBatchComputeEnvironmentEksConfiguration <a name="DataAwsccBatchComputeEnvironmentEksConfiguration" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentEksConfiguration {

};
```


### DataAwsccBatchComputeEnvironmentUpdatePolicy <a name="DataAwsccBatchComputeEnvironmentUpdatePolicy" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentUpdatePolicy {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList <a name="DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.get"></a>

```csharp
private DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference <a name="DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.batchImageStatus">BatchImageStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageIdOverride">ImageIdOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageKubernetesVersion">ImageKubernetesVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageType">ImageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2Configuration">DataAwsccBatchComputeEnvironmentComputeResourcesEc2Configuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BatchImageStatus`<sup>Required</sup> <a name="BatchImageStatus" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.batchImageStatus"></a>

```csharp
public string BatchImageStatus { get; }
```

- *Type:* string

---

##### `ImageIdOverride`<sup>Required</sup> <a name="ImageIdOverride" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageIdOverride"></a>

```csharp
public string ImageIdOverride { get; }
```

- *Type:* string

---

##### `ImageKubernetesVersion`<sup>Required</sup> <a name="ImageKubernetesVersion" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageKubernetesVersion"></a>

```csharp
public string ImageKubernetesVersion { get; }
```

- *Type:* string

---

##### `ImageType`<sup>Required</sup> <a name="ImageType" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageType"></a>

```csharp
public string ImageType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBatchComputeEnvironmentComputeResourcesEc2Configuration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2Configuration">DataAwsccBatchComputeEnvironmentComputeResourcesEc2Configuration</a>

---


### DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference <a name="DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateId">LaunchTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateName">LaunchTemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.overrides">Overrides</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList">DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.userdataType">UserdataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplate">DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LaunchTemplateId`<sup>Required</sup> <a name="LaunchTemplateId" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateId"></a>

```csharp
public string LaunchTemplateId { get; }
```

- *Type:* string

---

##### `LaunchTemplateName`<sup>Required</sup> <a name="LaunchTemplateName" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateName"></a>

```csharp
public string LaunchTemplateName { get; }
```

- *Type:* string

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.overrides"></a>

```csharp
public DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList Overrides { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList">DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList</a>

---

##### `UserdataType`<sup>Required</sup> <a name="UserdataType" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.userdataType"></a>

```csharp
public string UserdataType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplate">DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplate</a>

---


### DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList <a name="DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.get"></a>

```csharp
private DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference <a name="DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateId">LaunchTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateName">LaunchTemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.targetInstanceTypes">TargetInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.userdataType">UserdataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LaunchTemplateId`<sup>Required</sup> <a name="LaunchTemplateId" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateId"></a>

```csharp
public string LaunchTemplateId { get; }
```

- *Type:* string

---

##### `LaunchTemplateName`<sup>Required</sup> <a name="LaunchTemplateName" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateName"></a>

```csharp
public string LaunchTemplateName { get; }
```

- *Type:* string

---

##### `TargetInstanceTypes`<sup>Required</sup> <a name="TargetInstanceTypes" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.targetInstanceTypes"></a>

```csharp
public string[] TargetInstanceTypes { get; }
```

- *Type:* string[]

---

##### `UserdataType`<sup>Required</sup> <a name="UserdataType" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.userdataType"></a>

```csharp
public string UserdataType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a>

---


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.scaleInAfter">ScaleInAfter</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScaleInAfter`<sup>Required</sup> <a name="ScaleInAfter" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.scaleInAfter"></a>

```csharp
public double ScaleInAfter { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization</a>

---


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.reservationGroupArn">ReservationGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.reservationPreference">ReservationPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReservationGroupArn`<sup>Required</sup> <a name="ReservationGroupArn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.reservationGroupArn"></a>

```csharp
public string ReservationGroupArn { get; }
```

- *Type:* string

---

##### `ReservationPreference`<sup>Required</sup> <a name="ReservationPreference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.reservationPreference"></a>

```csharp
public string ReservationPreference { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations</a>

---


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.allowedInstanceTypes">AllowedInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedInstanceTypes`<sup>Required</sup> <a name="AllowedInstanceTypes" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.allowedInstanceTypes"></a>

```csharp
public string[] AllowedInstanceTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements</a>

---


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.useLocalStorage">UseLocalStorage</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UseLocalStorage`<sup>Required</sup> <a name="UseLocalStorage" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.useLocalStorage"></a>

```csharp
public IResolvable UseLocalStorage { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration</a>

---


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration</a>

---


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.capacityOptionType">CapacityOptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.capacityReservations">CapacityReservations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.ec2InstanceProfileArn">Ec2InstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.fipsEnabled">FipsEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.instanceMetadataTagsPropagation">InstanceMetadataTagsPropagation</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.instanceRequirements">InstanceRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.localStorageConfiguration">LocalStorageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.monitoring">Monitoring</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.storageConfiguration">StorageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CapacityOptionType`<sup>Required</sup> <a name="CapacityOptionType" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.capacityOptionType"></a>

```csharp
public string CapacityOptionType { get; }
```

- *Type:* string

---

##### `CapacityReservations`<sup>Required</sup> <a name="CapacityReservations" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.capacityReservations"></a>

```csharp
public DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference CapacityReservations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference</a>

---

##### `Ec2InstanceProfileArn`<sup>Required</sup> <a name="Ec2InstanceProfileArn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.ec2InstanceProfileArn"></a>

```csharp
public string Ec2InstanceProfileArn { get; }
```

- *Type:* string

---

##### `FipsEnabled`<sup>Required</sup> <a name="FipsEnabled" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.fipsEnabled"></a>

```csharp
public IResolvable FipsEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InstanceMetadataTagsPropagation`<sup>Required</sup> <a name="InstanceMetadataTagsPropagation" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.instanceMetadataTagsPropagation"></a>

```csharp
public IResolvable InstanceMetadataTagsPropagation { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InstanceRequirements`<sup>Required</sup> <a name="InstanceRequirements" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.instanceRequirements"></a>

```csharp
public DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference InstanceRequirements { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference</a>

---

##### `LocalStorageConfiguration`<sup>Required</sup> <a name="LocalStorageConfiguration" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.localStorageConfiguration"></a>

```csharp
public DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference LocalStorageConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference</a>

---

##### `Monitoring`<sup>Required</sup> <a name="Monitoring" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.monitoring"></a>

```csharp
public string Monitoring { get; }
```

- *Type:* string

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.networkConfiguration"></a>

```csharp
public DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference NetworkConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference</a>

---

##### `StorageConfiguration`<sup>Required</sup> <a name="StorageConfiguration" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.storageConfiguration"></a>

```csharp
public DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference StorageConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate</a>

---


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.storageSizeGiB">StorageSizeGiB</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StorageSizeGiB`<sup>Required</sup> <a name="StorageSizeGiB" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.storageSizeGiB"></a>

```csharp
public double StorageSizeGiB { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration</a>

---


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.infrastructureOptimization">InfrastructureOptimization</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.infrastructureRoleArn">InfrastructureRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.instanceLaunchTemplate">InstanceLaunchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.propagateTags">PropagateTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProvider">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InfrastructureOptimization`<sup>Required</sup> <a name="InfrastructureOptimization" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.infrastructureOptimization"></a>

```csharp
public DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference InfrastructureOptimization { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference</a>

---

##### `InfrastructureRoleArn`<sup>Required</sup> <a name="InfrastructureRoleArn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.infrastructureRoleArn"></a>

```csharp
public string InfrastructureRoleArn { get; }
```

- *Type:* string

---

##### `InstanceLaunchTemplate`<sup>Required</sup> <a name="InstanceLaunchTemplate" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.instanceLaunchTemplate"></a>

```csharp
public DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference InstanceLaunchTemplate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference</a>

---

##### `PropagateTags`<sup>Required</sup> <a name="PropagateTags" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.propagateTags"></a>

```csharp
public string PropagateTags { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProvider InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProvider">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProvider</a>

---


### DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference <a name="DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.allocationStrategy">AllocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.bidPercentage">BidPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.capacityTags">CapacityTags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.desiredvCpus">DesiredvCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.ec2Configuration">Ec2Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList">DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.ec2KeyPair">Ec2KeyPair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.imageId">ImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.instanceRole">InstanceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.instanceTypes">InstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.launchTemplate">LaunchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.managedInstancesProvider">ManagedInstancesProvider</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.maxvCpus">MaxvCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.minvCpus">MinvCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.placementGroup">PlacementGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.scalingPolicy">ScalingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.spotIamFleetRole">SpotIamFleetRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.updateToLatestImageVersion">UpdateToLatestImageVersion</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResources">DataAwsccBatchComputeEnvironmentComputeResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.allocationStrategy"></a>

```csharp
public string AllocationStrategy { get; }
```

- *Type:* string

---

##### `BidPercentage`<sup>Required</sup> <a name="BidPercentage" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.bidPercentage"></a>

```csharp
public double BidPercentage { get; }
```

- *Type:* double

---

##### `CapacityTags`<sup>Required</sup> <a name="CapacityTags" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.capacityTags"></a>

```csharp
public StringMap CapacityTags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `DesiredvCpus`<sup>Required</sup> <a name="DesiredvCpus" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.desiredvCpus"></a>

```csharp
public double DesiredvCpus { get; }
```

- *Type:* double

---

##### `Ec2Configuration`<sup>Required</sup> <a name="Ec2Configuration" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.ec2Configuration"></a>

```csharp
public DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList Ec2Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList">DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList</a>

---

##### `Ec2KeyPair`<sup>Required</sup> <a name="Ec2KeyPair" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.ec2KeyPair"></a>

```csharp
public string Ec2KeyPair { get; }
```

- *Type:* string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.imageId"></a>

```csharp
public string ImageId { get; }
```

- *Type:* string

---

##### `InstanceRole`<sup>Required</sup> <a name="InstanceRole" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.instanceRole"></a>

```csharp
public string InstanceRole { get; }
```

- *Type:* string

---

##### `InstanceTypes`<sup>Required</sup> <a name="InstanceTypes" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.instanceTypes"></a>

```csharp
public string[] InstanceTypes { get; }
```

- *Type:* string[]

---

##### `LaunchTemplate`<sup>Required</sup> <a name="LaunchTemplate" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.launchTemplate"></a>

```csharp
public DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference LaunchTemplate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference</a>

---

##### `ManagedInstancesProvider`<sup>Required</sup> <a name="ManagedInstancesProvider" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.managedInstancesProvider"></a>

```csharp
public DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference ManagedInstancesProvider { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference</a>

---

##### `MaxvCpus`<sup>Required</sup> <a name="MaxvCpus" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.maxvCpus"></a>

```csharp
public double MaxvCpus { get; }
```

- *Type:* double

---

##### `MinvCpus`<sup>Required</sup> <a name="MinvCpus" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.minvCpus"></a>

```csharp
public double MinvCpus { get; }
```

- *Type:* double

---

##### `PlacementGroup`<sup>Required</sup> <a name="PlacementGroup" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.placementGroup"></a>

```csharp
public string PlacementGroup { get; }
```

- *Type:* string

---

##### `ScalingPolicy`<sup>Required</sup> <a name="ScalingPolicy" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.scalingPolicy"></a>

```csharp
public DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference ScalingPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference</a>

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SpotIamFleetRole`<sup>Required</sup> <a name="SpotIamFleetRole" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.spotIamFleetRole"></a>

```csharp
public string SpotIamFleetRole { get; }
```

- *Type:* string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdateToLatestImageVersion`<sup>Required</sup> <a name="UpdateToLatestImageVersion" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.updateToLatestImageVersion"></a>

```csharp
public IResolvable UpdateToLatestImageVersion { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBatchComputeEnvironmentComputeResources InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResources">DataAwsccBatchComputeEnvironmentComputeResources</a>

---


### DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference <a name="DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.minScaleDownDelayMinutes">MinScaleDownDelayMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicy">DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MinScaleDownDelayMinutes`<sup>Required</sup> <a name="MinScaleDownDelayMinutes" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.minScaleDownDelayMinutes"></a>

```csharp
public double MinScaleDownDelayMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicy">DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicy</a>

---


### DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference <a name="DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.property.eksClusterArn">EksClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.property.kubernetesNamespace">KubernetesNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfiguration">DataAwsccBatchComputeEnvironmentEksConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EksClusterArn`<sup>Required</sup> <a name="EksClusterArn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.property.eksClusterArn"></a>

```csharp
public string EksClusterArn { get; }
```

- *Type:* string

---

##### `KubernetesNamespace`<sup>Required</sup> <a name="KubernetesNamespace" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.property.kubernetesNamespace"></a>

```csharp
public string KubernetesNamespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBatchComputeEnvironmentEksConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfiguration">DataAwsccBatchComputeEnvironmentEksConfiguration</a>

---


### DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference <a name="DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.property.jobExecutionTimeoutMinutes">JobExecutionTimeoutMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.property.terminateJobsOnUpdate">TerminateJobsOnUpdate</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicy">DataAwsccBatchComputeEnvironmentUpdatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JobExecutionTimeoutMinutes`<sup>Required</sup> <a name="JobExecutionTimeoutMinutes" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.property.jobExecutionTimeoutMinutes"></a>

```csharp
public double JobExecutionTimeoutMinutes { get; }
```

- *Type:* double

---

##### `TerminateJobsOnUpdate`<sup>Required</sup> <a name="TerminateJobsOnUpdate" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.property.terminateJobsOnUpdate"></a>

```csharp
public IResolvable TerminateJobsOnUpdate { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBatchComputeEnvironmentUpdatePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicy">DataAwsccBatchComputeEnvironmentUpdatePolicy</a>

---



