# `dataAwsccApigatewayDeployment` Submodule <a name="`dataAwsccApigatewayDeployment` Submodule" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApigatewayDeployment <a name="DataAwsccApigatewayDeployment" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/apigateway_deployment awscc_apigateway_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayDeployment(Construct Scope, string Id, DataAwsccApigatewayDeploymentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig">DataAwsccApigatewayDeploymentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig">DataAwsccApigatewayDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApigatewayDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApigatewayDeployment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApigatewayDeployment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApigatewayDeployment.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApigatewayDeployment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccApigatewayDeployment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccApigatewayDeployment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccApigatewayDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/apigateway_deployment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApigatewayDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.deploymentCanarySettings">DeploymentCanarySettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference">DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.restApiId">RestApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.stageDescription">StageDescription</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference">DataAwsccApigatewayDeploymentStageDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.stageName">StageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `DeploymentCanarySettings`<sup>Required</sup> <a name="DeploymentCanarySettings" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.deploymentCanarySettings"></a>

```csharp
public DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference DeploymentCanarySettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference">DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference</a>

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.restApiId"></a>

```csharp
public string RestApiId { get; }
```

- *Type:* string

---

##### `StageDescription`<sup>Required</sup> <a name="StageDescription" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.stageDescription"></a>

```csharp
public DataAwsccApigatewayDeploymentStageDescriptionOutputReference StageDescription { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference">DataAwsccApigatewayDeploymentStageDescriptionOutputReference</a>

---

##### `StageName`<sup>Required</sup> <a name="StageName" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.stageName"></a>

```csharp
public string StageName { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApigatewayDeploymentConfig <a name="DataAwsccApigatewayDeploymentConfig" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayDeploymentConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/apigateway_deployment#id DataAwsccApigatewayDeployment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApigatewayDeploymentDeploymentCanarySettings <a name="DataAwsccApigatewayDeploymentDeploymentCanarySettings" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayDeploymentDeploymentCanarySettings {

};
```


### DataAwsccApigatewayDeploymentStageDescription <a name="DataAwsccApigatewayDeploymentStageDescription" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescription.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayDeploymentStageDescription {

};
```


### DataAwsccApigatewayDeploymentStageDescriptionAccessLogSetting <a name="DataAwsccApigatewayDeploymentStageDescriptionAccessLogSetting" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSetting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayDeploymentStageDescriptionAccessLogSetting {

};
```


### DataAwsccApigatewayDeploymentStageDescriptionCanarySetting <a name="DataAwsccApigatewayDeploymentStageDescriptionCanarySetting" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySetting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayDeploymentStageDescriptionCanarySetting {

};
```


### DataAwsccApigatewayDeploymentStageDescriptionMethodSettings <a name="DataAwsccApigatewayDeploymentStageDescriptionMethodSettings" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayDeploymentStageDescriptionMethodSettings {

};
```


### DataAwsccApigatewayDeploymentStageDescriptionTags <a name="DataAwsccApigatewayDeploymentStageDescriptionTags" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayDeploymentStageDescriptionTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference <a name="DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.percentTraffic">PercentTraffic</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.stageVariableOverrides">StageVariableOverrides</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.useStageCache">UseStageCache</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettings">DataAwsccApigatewayDeploymentDeploymentCanarySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PercentTraffic`<sup>Required</sup> <a name="PercentTraffic" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.percentTraffic"></a>

```csharp
public double PercentTraffic { get; }
```

- *Type:* double

---

##### `StageVariableOverrides`<sup>Required</sup> <a name="StageVariableOverrides" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.stageVariableOverrides"></a>

```csharp
public StringMap StageVariableOverrides { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `UseStageCache`<sup>Required</sup> <a name="UseStageCache" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.useStageCache"></a>

```csharp
public IResolvable UseStageCache { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApigatewayDeploymentDeploymentCanarySettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettings">DataAwsccApigatewayDeploymentDeploymentCanarySettings</a>

---


### DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference <a name="DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.destinationArn">DestinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSetting">DataAwsccApigatewayDeploymentStageDescriptionAccessLogSetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.destinationArn"></a>

```csharp
public string DestinationArn { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApigatewayDeploymentStageDescriptionAccessLogSetting InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSetting">DataAwsccApigatewayDeploymentStageDescriptionAccessLogSetting</a>

---


### DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference <a name="DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.percentTraffic">PercentTraffic</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.stageVariableOverrides">StageVariableOverrides</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.useStageCache">UseStageCache</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySetting">DataAwsccApigatewayDeploymentStageDescriptionCanarySetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PercentTraffic`<sup>Required</sup> <a name="PercentTraffic" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.percentTraffic"></a>

```csharp
public double PercentTraffic { get; }
```

- *Type:* double

---

##### `StageVariableOverrides`<sup>Required</sup> <a name="StageVariableOverrides" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.stageVariableOverrides"></a>

```csharp
public StringMap StageVariableOverrides { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `UseStageCache`<sup>Required</sup> <a name="UseStageCache" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.useStageCache"></a>

```csharp
public IResolvable UseStageCache { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApigatewayDeploymentStageDescriptionCanarySetting InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySetting">DataAwsccApigatewayDeploymentStageDescriptionCanarySetting</a>

---


### DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList <a name="DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.get"></a>

```csharp
private DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference <a name="DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheDataEncrypted">CacheDataEncrypted</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheTtlInSeconds">CacheTtlInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cachingEnabled">CachingEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.dataTraceEnabled">DataTraceEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.httpMethod">HttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.loggingLevel">LoggingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.metricsEnabled">MetricsEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.resourcePath">ResourcePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingBurstLimit">ThrottlingBurstLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingRateLimit">ThrottlingRateLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettings">DataAwsccApigatewayDeploymentStageDescriptionMethodSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CacheDataEncrypted`<sup>Required</sup> <a name="CacheDataEncrypted" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheDataEncrypted"></a>

```csharp
public IResolvable CacheDataEncrypted { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `CacheTtlInSeconds`<sup>Required</sup> <a name="CacheTtlInSeconds" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheTtlInSeconds"></a>

```csharp
public double CacheTtlInSeconds { get; }
```

- *Type:* double

---

##### `CachingEnabled`<sup>Required</sup> <a name="CachingEnabled" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cachingEnabled"></a>

```csharp
public IResolvable CachingEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DataTraceEnabled`<sup>Required</sup> <a name="DataTraceEnabled" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.dataTraceEnabled"></a>

```csharp
public IResolvable DataTraceEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.httpMethod"></a>

```csharp
public string HttpMethod { get; }
```

- *Type:* string

---

##### `LoggingLevel`<sup>Required</sup> <a name="LoggingLevel" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.loggingLevel"></a>

```csharp
public string LoggingLevel { get; }
```

- *Type:* string

---

##### `MetricsEnabled`<sup>Required</sup> <a name="MetricsEnabled" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.metricsEnabled"></a>

```csharp
public IResolvable MetricsEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ResourcePath`<sup>Required</sup> <a name="ResourcePath" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.resourcePath"></a>

```csharp
public string ResourcePath { get; }
```

- *Type:* string

---

##### `ThrottlingBurstLimit`<sup>Required</sup> <a name="ThrottlingBurstLimit" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingBurstLimit"></a>

```csharp
public double ThrottlingBurstLimit { get; }
```

- *Type:* double

---

##### `ThrottlingRateLimit`<sup>Required</sup> <a name="ThrottlingRateLimit" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingRateLimit"></a>

```csharp
public double ThrottlingRateLimit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApigatewayDeploymentStageDescriptionMethodSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettings">DataAwsccApigatewayDeploymentStageDescriptionMethodSettings</a>

---


### DataAwsccApigatewayDeploymentStageDescriptionOutputReference <a name="DataAwsccApigatewayDeploymentStageDescriptionOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayDeploymentStageDescriptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.accessLogSetting">AccessLogSetting</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference">DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterEnabled">CacheClusterEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterSize">CacheClusterSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.cacheDataEncrypted">CacheDataEncrypted</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.cacheTtlInSeconds">CacheTtlInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.cachingEnabled">CachingEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.canarySetting">CanarySetting</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference">DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.clientCertificateId">ClientCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.dataTraceEnabled">DataTraceEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.documentationVersion">DocumentationVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.loggingLevel">LoggingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.methodSettings">MethodSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList">DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.metricsEnabled">MetricsEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList">DataAwsccApigatewayDeploymentStageDescriptionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.throttlingBurstLimit">ThrottlingBurstLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.throttlingRateLimit">ThrottlingRateLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.tracingEnabled">TracingEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.variables">Variables</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescription">DataAwsccApigatewayDeploymentStageDescription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessLogSetting`<sup>Required</sup> <a name="AccessLogSetting" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.accessLogSetting"></a>

```csharp
public DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference AccessLogSetting { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference">DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference</a>

---

##### `CacheClusterEnabled`<sup>Required</sup> <a name="CacheClusterEnabled" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterEnabled"></a>

```csharp
public IResolvable CacheClusterEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `CacheClusterSize`<sup>Required</sup> <a name="CacheClusterSize" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterSize"></a>

```csharp
public string CacheClusterSize { get; }
```

- *Type:* string

---

##### `CacheDataEncrypted`<sup>Required</sup> <a name="CacheDataEncrypted" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.cacheDataEncrypted"></a>

```csharp
public IResolvable CacheDataEncrypted { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `CacheTtlInSeconds`<sup>Required</sup> <a name="CacheTtlInSeconds" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.cacheTtlInSeconds"></a>

```csharp
public double CacheTtlInSeconds { get; }
```

- *Type:* double

---

##### `CachingEnabled`<sup>Required</sup> <a name="CachingEnabled" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.cachingEnabled"></a>

```csharp
public IResolvable CachingEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `CanarySetting`<sup>Required</sup> <a name="CanarySetting" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.canarySetting"></a>

```csharp
public DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference CanarySetting { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference">DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference</a>

---

##### `ClientCertificateId`<sup>Required</sup> <a name="ClientCertificateId" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.clientCertificateId"></a>

```csharp
public string ClientCertificateId { get; }
```

- *Type:* string

---

##### `DataTraceEnabled`<sup>Required</sup> <a name="DataTraceEnabled" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.dataTraceEnabled"></a>

```csharp
public IResolvable DataTraceEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DocumentationVersion`<sup>Required</sup> <a name="DocumentationVersion" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.documentationVersion"></a>

```csharp
public string DocumentationVersion { get; }
```

- *Type:* string

---

##### `LoggingLevel`<sup>Required</sup> <a name="LoggingLevel" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.loggingLevel"></a>

```csharp
public string LoggingLevel { get; }
```

- *Type:* string

---

##### `MethodSettings`<sup>Required</sup> <a name="MethodSettings" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.methodSettings"></a>

```csharp
public DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList MethodSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList">DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList</a>

---

##### `MetricsEnabled`<sup>Required</sup> <a name="MetricsEnabled" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.metricsEnabled"></a>

```csharp
public IResolvable MetricsEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.tags"></a>

```csharp
public DataAwsccApigatewayDeploymentStageDescriptionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList">DataAwsccApigatewayDeploymentStageDescriptionTagsList</a>

---

##### `ThrottlingBurstLimit`<sup>Required</sup> <a name="ThrottlingBurstLimit" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.throttlingBurstLimit"></a>

```csharp
public double ThrottlingBurstLimit { get; }
```

- *Type:* double

---

##### `ThrottlingRateLimit`<sup>Required</sup> <a name="ThrottlingRateLimit" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.throttlingRateLimit"></a>

```csharp
public double ThrottlingRateLimit { get; }
```

- *Type:* double

---

##### `TracingEnabled`<sup>Required</sup> <a name="TracingEnabled" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.tracingEnabled"></a>

```csharp
public IResolvable TracingEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.variables"></a>

```csharp
public StringMap Variables { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApigatewayDeploymentStageDescription InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescription">DataAwsccApigatewayDeploymentStageDescription</a>

---


### DataAwsccApigatewayDeploymentStageDescriptionTagsList <a name="DataAwsccApigatewayDeploymentStageDescriptionTagsList" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayDeploymentStageDescriptionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.get"></a>

```csharp
private DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference <a name="DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTags">DataAwsccApigatewayDeploymentStageDescriptionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApigatewayDeploymentStageDescriptionTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTags">DataAwsccApigatewayDeploymentStageDescriptionTags</a>

---



