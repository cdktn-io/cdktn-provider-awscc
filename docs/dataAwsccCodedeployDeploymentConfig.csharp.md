# `dataAwsccCodedeployDeploymentConfig` Submodule <a name="`dataAwsccCodedeployDeploymentConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCodedeployDeploymentConfig <a name="DataAwsccCodedeployDeploymentConfig" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/codedeploy_deployment_config awscc_codedeploy_deployment_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentConfig(Construct Scope, string Id, DataAwsccCodedeployDeploymentConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig">DataAwsccCodedeployDeploymentConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig">DataAwsccCodedeployDeploymentConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCodedeployDeploymentConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCodedeployDeploymentConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCodedeployDeploymentConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCodedeployDeploymentConfig.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCodedeployDeploymentConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccCodedeployDeploymentConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCodedeployDeploymentConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCodedeployDeploymentConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/codedeploy_deployment_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCodedeployDeploymentConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.computePlatform">ComputePlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.deploymentConfigName">DeploymentConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.minimumHealthyHosts">MinimumHealthyHosts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference">DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.trafficRoutingConfig">TrafficRoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.zonalConfig">ZonalConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference">DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ComputePlatform`<sup>Required</sup> <a name="ComputePlatform" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.computePlatform"></a>

```csharp
public string ComputePlatform { get; }
```

- *Type:* string

---

##### `DeploymentConfigName`<sup>Required</sup> <a name="DeploymentConfigName" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.deploymentConfigName"></a>

```csharp
public string DeploymentConfigName { get; }
```

- *Type:* string

---

##### `MinimumHealthyHosts`<sup>Required</sup> <a name="MinimumHealthyHosts" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.minimumHealthyHosts"></a>

```csharp
public DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference MinimumHealthyHosts { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference">DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference</a>

---

##### `TrafficRoutingConfig`<sup>Required</sup> <a name="TrafficRoutingConfig" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.trafficRoutingConfig"></a>

```csharp
public DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference TrafficRoutingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference</a>

---

##### `ZonalConfig`<sup>Required</sup> <a name="ZonalConfig" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.zonalConfig"></a>

```csharp
public DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference ZonalConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference">DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCodedeployDeploymentConfigConfig <a name="DataAwsccCodedeployDeploymentConfigConfig" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentConfigConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/codedeploy_deployment_config#id DataAwsccCodedeployDeploymentConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts <a name="DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts {

};
```


### DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig <a name="DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig {

};
```


### DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary <a name="DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary {

};
```


### DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear <a name="DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear {

};
```


### DataAwsccCodedeployDeploymentConfigZonalConfig <a name="DataAwsccCodedeployDeploymentConfigZonalConfig" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentConfigZonalConfig {

};
```


### DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone <a name="DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference <a name="DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts">DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts">DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts</a>

---


### DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference <a name="DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedCanary">TimeBasedCanary</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedLinear">TimeBasedLinear</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeBasedCanary`<sup>Required</sup> <a name="TimeBasedCanary" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedCanary"></a>

```csharp
public DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference TimeBasedCanary { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference</a>

---

##### `TimeBasedLinear`<sup>Required</sup> <a name="TimeBasedLinear" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedLinear"></a>

```csharp
public DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference TimeBasedLinear { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig</a>

---


### DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference <a name="DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.canaryInterval">CanaryInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.canaryPercentage">CanaryPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CanaryInterval`<sup>Required</sup> <a name="CanaryInterval" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.canaryInterval"></a>

```csharp
public double CanaryInterval { get; }
```

- *Type:* double

---

##### `CanaryPercentage`<sup>Required</sup> <a name="CanaryPercentage" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.canaryPercentage"></a>

```csharp
public double CanaryPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a>

---


### DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference <a name="DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.linearInterval">LinearInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.linearPercentage">LinearPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LinearInterval`<sup>Required</sup> <a name="LinearInterval" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.linearInterval"></a>

```csharp
public double LinearInterval { get; }
```

- *Type:* double

---

##### `LinearPercentage`<sup>Required</sup> <a name="LinearPercentage" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.linearPercentage"></a>

```csharp
public double LinearPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a>

---


### DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference <a name="DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone">DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone">DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone</a>

---


### DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference <a name="DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.firstZoneMonitorDurationInSeconds">FirstZoneMonitorDurationInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.minimumHealthyHostsPerZone">MinimumHealthyHostsPerZone</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference">DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.monitorDurationInSeconds">MonitorDurationInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfig">DataAwsccCodedeployDeploymentConfigZonalConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FirstZoneMonitorDurationInSeconds`<sup>Required</sup> <a name="FirstZoneMonitorDurationInSeconds" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.firstZoneMonitorDurationInSeconds"></a>

```csharp
public double FirstZoneMonitorDurationInSeconds { get; }
```

- *Type:* double

---

##### `MinimumHealthyHostsPerZone`<sup>Required</sup> <a name="MinimumHealthyHostsPerZone" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.minimumHealthyHostsPerZone"></a>

```csharp
public DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference MinimumHealthyHostsPerZone { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference">DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference</a>

---

##### `MonitorDurationInSeconds`<sup>Required</sup> <a name="MonitorDurationInSeconds" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.monitorDurationInSeconds"></a>

```csharp
public double MonitorDurationInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentConfigZonalConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfig">DataAwsccCodedeployDeploymentConfigZonalConfig</a>

---



