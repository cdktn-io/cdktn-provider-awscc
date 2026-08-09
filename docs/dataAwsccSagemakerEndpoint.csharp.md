# `dataAwsccSagemakerEndpoint` Submodule <a name="`dataAwsccSagemakerEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerEndpoint <a name="DataAwsccSagemakerEndpoint" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_endpoint awscc_sagemaker_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpoint(Construct Scope, string Id, DataAwsccSagemakerEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig">DataAwsccSagemakerEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig">DataAwsccSagemakerEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSagemakerEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSagemakerEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSagemakerEndpoint.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSagemakerEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccSagemakerEndpoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSagemakerEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSagemakerEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.deploymentConfig">DeploymentConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference">DataAwsccSagemakerEndpointDeploymentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.endpointArn">EndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.endpointConfigName">EndpointConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.endpointName">EndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.excludeRetainedVariantProperties">ExcludeRetainedVariantProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList">DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.retainAllVariantProperties">RetainAllVariantProperties</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.retainDeploymentConfig">RetainDeploymentConfig</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList">DataAwsccSagemakerEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `DeploymentConfig`<sup>Required</sup> <a name="DeploymentConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.deploymentConfig"></a>

```csharp
public DataAwsccSagemakerEndpointDeploymentConfigOutputReference DeploymentConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference">DataAwsccSagemakerEndpointDeploymentConfigOutputReference</a>

---

##### `EndpointArn`<sup>Required</sup> <a name="EndpointArn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.endpointArn"></a>

```csharp
public string EndpointArn { get; }
```

- *Type:* string

---

##### `EndpointConfigName`<sup>Required</sup> <a name="EndpointConfigName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.endpointConfigName"></a>

```csharp
public string EndpointConfigName { get; }
```

- *Type:* string

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.endpointName"></a>

```csharp
public string EndpointName { get; }
```

- *Type:* string

---

##### `ExcludeRetainedVariantProperties`<sup>Required</sup> <a name="ExcludeRetainedVariantProperties" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.excludeRetainedVariantProperties"></a>

```csharp
public DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList ExcludeRetainedVariantProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList">DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList</a>

---

##### `RetainAllVariantProperties`<sup>Required</sup> <a name="RetainAllVariantProperties" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.retainAllVariantProperties"></a>

```csharp
public IResolvable RetainAllVariantProperties { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RetainDeploymentConfig`<sup>Required</sup> <a name="RetainDeploymentConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.retainDeploymentConfig"></a>

```csharp
public IResolvable RetainDeploymentConfig { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.tags"></a>

```csharp
public DataAwsccSagemakerEndpointTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList">DataAwsccSagemakerEndpointTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerEndpointConfig <a name="DataAwsccSagemakerEndpointConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_endpoint#id DataAwsccSagemakerEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerEndpointDeploymentConfig <a name="DataAwsccSagemakerEndpointDeploymentConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointDeploymentConfig {

};
```


### DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfiguration <a name="DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfiguration" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfiguration {

};
```


### DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms <a name="DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms {

};
```


### DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy <a name="DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy {

};
```


### DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration <a name="DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration {

};
```


### DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize <a name="DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize {

};
```


### DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize <a name="DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize {

};
```


### DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicy <a name="DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicy {

};
```


### DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize <a name="DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize {

};
```


### DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize <a name="DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize {

};
```


### DataAwsccSagemakerEndpointExcludeRetainedVariantProperties <a name="DataAwsccSagemakerEndpointExcludeRetainedVariantProperties" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointExcludeRetainedVariantProperties {

};
```


### DataAwsccSagemakerEndpointTags <a name="DataAwsccSagemakerEndpointTags" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList <a name="DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.get"></a>

```csharp
private DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference <a name="DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmName">AlarmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms">DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlarmName`<sup>Required</sup> <a name="AlarmName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmName"></a>

```csharp
public string AlarmName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms">DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms</a>

---


### DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference <a name="DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarms">Alarms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList">DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfiguration">DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Alarms`<sup>Required</sup> <a name="Alarms" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarms"></a>

```csharp
public DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList Alarms { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList">DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfiguration">DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfiguration</a>

---


### DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference <a name="DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSeconds">MaximumExecutionTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.terminationWaitInSeconds">TerminationWaitInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.trafficRoutingConfiguration">TrafficRoutingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumExecutionTimeoutInSeconds`<sup>Required</sup> <a name="MaximumExecutionTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSeconds"></a>

```csharp
public double MaximumExecutionTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `TerminationWaitInSeconds`<sup>Required</sup> <a name="TerminationWaitInSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.terminationWaitInSeconds"></a>

```csharp
public double TerminationWaitInSeconds { get; }
```

- *Type:* double

---

##### `TrafficRoutingConfiguration`<sup>Required</sup> <a name="TrafficRoutingConfiguration" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.trafficRoutingConfiguration"></a>

```csharp
public DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference TrafficRoutingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy</a>

---


### DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference <a name="DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize</a>

---


### DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference <a name="DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize</a>

---


### DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference <a name="DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.canarySize">CanarySize</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.linearStepSize">LinearStepSize</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.waitIntervalInSeconds">WaitIntervalInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CanarySize`<sup>Required</sup> <a name="CanarySize" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.canarySize"></a>

```csharp
public DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference CanarySize { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference</a>

---

##### `LinearStepSize`<sup>Required</sup> <a name="LinearStepSize" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.linearStepSize"></a>

```csharp
public DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference LinearStepSize { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `WaitIntervalInSeconds`<sup>Required</sup> <a name="WaitIntervalInSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.waitIntervalInSeconds"></a>

```csharp
public double WaitIntervalInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration</a>

---


### DataAwsccSagemakerEndpointDeploymentConfigOutputReference <a name="DataAwsccSagemakerEndpointDeploymentConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointDeploymentConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.autoRollbackConfiguration">AutoRollbackConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference">DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.blueGreenUpdatePolicy">BlueGreenUpdatePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.rollingUpdatePolicy">RollingUpdatePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfig">DataAwsccSagemakerEndpointDeploymentConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoRollbackConfiguration`<sup>Required</sup> <a name="AutoRollbackConfiguration" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.autoRollbackConfiguration"></a>

```csharp
public DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference AutoRollbackConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference">DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference</a>

---

##### `BlueGreenUpdatePolicy`<sup>Required</sup> <a name="BlueGreenUpdatePolicy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.blueGreenUpdatePolicy"></a>

```csharp
public DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference BlueGreenUpdatePolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference</a>

---

##### `RollingUpdatePolicy`<sup>Required</sup> <a name="RollingUpdatePolicy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.rollingUpdatePolicy"></a>

```csharp
public DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference RollingUpdatePolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointDeploymentConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfig">DataAwsccSagemakerEndpointDeploymentConfig</a>

---


### DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference <a name="DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>

---


### DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference <a name="DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSize">MaximumBatchSize</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSeconds">MaximumExecutionTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSize">RollbackMaximumBatchSize</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSeconds">WaitIntervalInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicy">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumBatchSize`<sup>Required</sup> <a name="MaximumBatchSize" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSize"></a>

```csharp
public DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference MaximumBatchSize { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference</a>

---

##### `MaximumExecutionTimeoutInSeconds`<sup>Required</sup> <a name="MaximumExecutionTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSeconds"></a>

```csharp
public double MaximumExecutionTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `RollbackMaximumBatchSize`<sup>Required</sup> <a name="RollbackMaximumBatchSize" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSize"></a>

```csharp
public DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference RollbackMaximumBatchSize { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference</a>

---

##### `WaitIntervalInSeconds`<sup>Required</sup> <a name="WaitIntervalInSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSeconds"></a>

```csharp
public double WaitIntervalInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicy">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicy</a>

---


### DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference <a name="DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>

---


### DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList <a name="DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.get"></a>

```csharp
private DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference <a name="DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.variantPropertyType">VariantPropertyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantProperties">DataAwsccSagemakerEndpointExcludeRetainedVariantProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VariantPropertyType`<sup>Required</sup> <a name="VariantPropertyType" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.variantPropertyType"></a>

```csharp
public string VariantPropertyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointExcludeRetainedVariantProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantProperties">DataAwsccSagemakerEndpointExcludeRetainedVariantProperties</a>

---


### DataAwsccSagemakerEndpointTagsList <a name="DataAwsccSagemakerEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.get"></a>

```csharp
private DataAwsccSagemakerEndpointTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSagemakerEndpointTagsOutputReference <a name="DataAwsccSagemakerEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerEndpointTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTags">DataAwsccSagemakerEndpointTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerEndpointTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTags">DataAwsccSagemakerEndpointTags</a>

---



