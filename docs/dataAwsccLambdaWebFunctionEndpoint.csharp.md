# `dataAwsccLambdaWebFunctionEndpoint` Submodule <a name="`dataAwsccLambdaWebFunctionEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLambdaWebFunctionEndpoint <a name="DataAwsccLambdaWebFunctionEndpoint" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/lambda_web_function_endpoint awscc_lambda_web_function_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionEndpoint(Construct Scope, string Id, DataAwsccLambdaWebFunctionEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig">DataAwsccLambdaWebFunctionEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig">DataAwsccLambdaWebFunctionEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLambdaWebFunctionEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccLambdaWebFunctionEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccLambdaWebFunctionEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccLambdaWebFunctionEndpoint.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccLambdaWebFunctionEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccLambdaWebFunctionEndpoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccLambdaWebFunctionEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccLambdaWebFunctionEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/lambda_web_function_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLambdaWebFunctionEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.endpointArn">EndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.endpointName">EndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.endpointType">EndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.functionArn">FunctionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.functionName">FunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.regionalEndpoints">RegionalEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap">DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.revisionWeights">RevisionWeights</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList">DataAwsccLambdaWebFunctionEndpointRevisionWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.scalingConfig">ScalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference">DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.stateReason">StateReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.throttleConfig">ThrottleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference">DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.updateStatus">UpdateStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.updateStatusReason">UpdateStatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `EndpointArn`<sup>Required</sup> <a name="EndpointArn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.endpointArn"></a>

```csharp
public string EndpointArn { get; }
```

- *Type:* string

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.endpointName"></a>

```csharp
public string EndpointName { get; }
```

- *Type:* string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.endpointType"></a>

```csharp
public string EndpointType { get; }
```

- *Type:* string

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.functionArn"></a>

```csharp
public string FunctionArn { get; }
```

- *Type:* string

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.functionName"></a>

```csharp
public string FunctionName { get; }
```

- *Type:* string

---

##### `RegionalEndpoints`<sup>Required</sup> <a name="RegionalEndpoints" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.regionalEndpoints"></a>

```csharp
public DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap RegionalEndpoints { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap">DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap</a>

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

##### `RevisionWeights`<sup>Required</sup> <a name="RevisionWeights" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.revisionWeights"></a>

```csharp
public DataAwsccLambdaWebFunctionEndpointRevisionWeightsList RevisionWeights { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList">DataAwsccLambdaWebFunctionEndpointRevisionWeightsList</a>

---

##### `ScalingConfig`<sup>Required</sup> <a name="ScalingConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.scalingConfig"></a>

```csharp
public DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference ScalingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference">DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateReason`<sup>Required</sup> <a name="StateReason" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.stateReason"></a>

```csharp
public string StateReason { get; }
```

- *Type:* string

---

##### `ThrottleConfig`<sup>Required</sup> <a name="ThrottleConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.throttleConfig"></a>

```csharp
public DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference ThrottleConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference">DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `UpdateStatus`<sup>Required</sup> <a name="UpdateStatus" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.updateStatus"></a>

```csharp
public string UpdateStatus { get; }
```

- *Type:* string

---

##### `UpdateStatusReason`<sup>Required</sup> <a name="UpdateStatusReason" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.updateStatusReason"></a>

```csharp
public string UpdateStatusReason { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLambdaWebFunctionEndpointConfig <a name="DataAwsccLambdaWebFunctionEndpointConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionEndpointConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/lambda_web_function_endpoint#id DataAwsccLambdaWebFunctionEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLambdaWebFunctionEndpointRegionalEndpoints <a name="DataAwsccLambdaWebFunctionEndpointRegionalEndpoints" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpoints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionEndpointRegionalEndpoints {

};
```


### DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeights <a name="DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeights" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeights.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeights {

};
```


### DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfig <a name="DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfig {

};
```


### DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfig <a name="DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfig {

};
```


### DataAwsccLambdaWebFunctionEndpointRevisionWeights <a name="DataAwsccLambdaWebFunctionEndpointRevisionWeights" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeights.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionEndpointRevisionWeights {

};
```


### DataAwsccLambdaWebFunctionEndpointScalingConfig <a name="DataAwsccLambdaWebFunctionEndpointScalingConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionEndpointScalingConfig {

};
```


### DataAwsccLambdaWebFunctionEndpointThrottleConfig <a name="DataAwsccLambdaWebFunctionEndpointThrottleConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionEndpointThrottleConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap <a name="DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.get"></a>

```csharp
private DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference <a name="DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.revisionWeights">RevisionWeights</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList">DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.scalingConfig">ScalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference">DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.stateReason">StateReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.throttleConfig">ThrottleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference">DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.updateStatus">UpdateStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.updateStatusReason">UpdateStatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpoints">DataAwsccLambdaWebFunctionEndpointRegionalEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `RevisionWeights`<sup>Required</sup> <a name="RevisionWeights" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.revisionWeights"></a>

```csharp
public DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList RevisionWeights { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList">DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList</a>

---

##### `ScalingConfig`<sup>Required</sup> <a name="ScalingConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.scalingConfig"></a>

```csharp
public DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference ScalingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference">DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateReason`<sup>Required</sup> <a name="StateReason" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.stateReason"></a>

```csharp
public string StateReason { get; }
```

- *Type:* string

---

##### `ThrottleConfig`<sup>Required</sup> <a name="ThrottleConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.throttleConfig"></a>

```csharp
public DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference ThrottleConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference">DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference</a>

---

##### `UpdateStatus`<sup>Required</sup> <a name="UpdateStatus" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.updateStatus"></a>

```csharp
public string UpdateStatus { get; }
```

- *Type:* string

---

##### `UpdateStatusReason`<sup>Required</sup> <a name="UpdateStatusReason" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.updateStatusReason"></a>

```csharp
public string UpdateStatusReason { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLambdaWebFunctionEndpointRegionalEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpoints">DataAwsccLambdaWebFunctionEndpointRegionalEndpoints</a>

---


### DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList <a name="DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.get"></a>

```csharp
private DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference <a name="DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.revisionId">RevisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeights">DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeights</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RevisionId`<sup>Required</sup> <a name="RevisionId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.revisionId"></a>

```csharp
public string RevisionId { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeights InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeights">DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeights</a>

---


### DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference <a name="DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.maxEnvironments">MaxEnvironments</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfig">DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxEnvironments`<sup>Required</sup> <a name="MaxEnvironments" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.maxEnvironments"></a>

```csharp
public double MaxEnvironments { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfig">DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfig</a>

---


### DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference <a name="DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.rateLimit">RateLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfig">DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RateLimit`<sup>Required</sup> <a name="RateLimit" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.rateLimit"></a>

```csharp
public double RateLimit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfig">DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfig</a>

---


### DataAwsccLambdaWebFunctionEndpointRevisionWeightsList <a name="DataAwsccLambdaWebFunctionEndpointRevisionWeightsList" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionEndpointRevisionWeightsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.get"></a>

```csharp
private DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference <a name="DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.property.revisionId">RevisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeights">DataAwsccLambdaWebFunctionEndpointRevisionWeights</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RevisionId`<sup>Required</sup> <a name="RevisionId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.property.revisionId"></a>

```csharp
public string RevisionId { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLambdaWebFunctionEndpointRevisionWeights InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeights">DataAwsccLambdaWebFunctionEndpointRevisionWeights</a>

---


### DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference <a name="DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.property.maxEnvironments">MaxEnvironments</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfig">DataAwsccLambdaWebFunctionEndpointScalingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxEnvironments`<sup>Required</sup> <a name="MaxEnvironments" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.property.maxEnvironments"></a>

```csharp
public double MaxEnvironments { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLambdaWebFunctionEndpointScalingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfig">DataAwsccLambdaWebFunctionEndpointScalingConfig</a>

---


### DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference <a name="DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.property.rateLimit">RateLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfig">DataAwsccLambdaWebFunctionEndpointThrottleConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RateLimit`<sup>Required</sup> <a name="RateLimit" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.property.rateLimit"></a>

```csharp
public double RateLimit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLambdaWebFunctionEndpointThrottleConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfig">DataAwsccLambdaWebFunctionEndpointThrottleConfig</a>

---



