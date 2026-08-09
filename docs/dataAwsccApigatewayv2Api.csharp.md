# `dataAwsccApigatewayv2Api` Submodule <a name="`dataAwsccApigatewayv2Api` Submodule" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApigatewayv2Api <a name="DataAwsccApigatewayv2Api" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigatewayv2_api awscc_apigatewayv2_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayv2Api(Construct Scope, string Id, DataAwsccApigatewayv2ApiConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig">DataAwsccApigatewayv2ApiConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig">DataAwsccApigatewayv2ApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApigatewayv2Api resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApigatewayv2Api.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApigatewayv2Api.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApigatewayv2Api.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApigatewayv2Api.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccApigatewayv2Api resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccApigatewayv2Api to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccApigatewayv2Api that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigatewayv2_api#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApigatewayv2Api to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.apiEndpoint">ApiEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.apiId">ApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.apiKeySelectionExpression">ApiKeySelectionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.basePath">BasePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.bodyS3Location">BodyS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference">DataAwsccApigatewayv2ApiBodyS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.corsConfiguration">CorsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference">DataAwsccApigatewayv2ApiCorsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.credentialsArn">CredentialsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.disableExecuteApiEndpoint">DisableExecuteApiEndpoint</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.disableSchemaValidation">DisableSchemaValidation</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.failOnWarnings">FailOnWarnings</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.protocolType">ProtocolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.routeKey">RouteKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.routeSelectionExpression">RouteSelectionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ApiEndpoint`<sup>Required</sup> <a name="ApiEndpoint" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.apiEndpoint"></a>

```csharp
public string ApiEndpoint { get; }
```

- *Type:* string

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.apiId"></a>

```csharp
public string ApiId { get; }
```

- *Type:* string

---

##### `ApiKeySelectionExpression`<sup>Required</sup> <a name="ApiKeySelectionExpression" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.apiKeySelectionExpression"></a>

```csharp
public string ApiKeySelectionExpression { get; }
```

- *Type:* string

---

##### `BasePath`<sup>Required</sup> <a name="BasePath" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.basePath"></a>

```csharp
public string BasePath { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `BodyS3Location`<sup>Required</sup> <a name="BodyS3Location" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.bodyS3Location"></a>

```csharp
public DataAwsccApigatewayv2ApiBodyS3LocationOutputReference BodyS3Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference">DataAwsccApigatewayv2ApiBodyS3LocationOutputReference</a>

---

##### `CorsConfiguration`<sup>Required</sup> <a name="CorsConfiguration" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.corsConfiguration"></a>

```csharp
public DataAwsccApigatewayv2ApiCorsConfigurationOutputReference CorsConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference">DataAwsccApigatewayv2ApiCorsConfigurationOutputReference</a>

---

##### `CredentialsArn`<sup>Required</sup> <a name="CredentialsArn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.credentialsArn"></a>

```csharp
public string CredentialsArn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisableExecuteApiEndpoint`<sup>Required</sup> <a name="DisableExecuteApiEndpoint" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.disableExecuteApiEndpoint"></a>

```csharp
public IResolvable DisableExecuteApiEndpoint { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DisableSchemaValidation`<sup>Required</sup> <a name="DisableSchemaValidation" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.disableSchemaValidation"></a>

```csharp
public IResolvable DisableSchemaValidation { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `FailOnWarnings`<sup>Required</sup> <a name="FailOnWarnings" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.failOnWarnings"></a>

```csharp
public IResolvable FailOnWarnings { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProtocolType`<sup>Required</sup> <a name="ProtocolType" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.protocolType"></a>

```csharp
public string ProtocolType { get; }
```

- *Type:* string

---

##### `RouteKey`<sup>Required</sup> <a name="RouteKey" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.routeKey"></a>

```csharp
public string RouteKey { get; }
```

- *Type:* string

---

##### `RouteSelectionExpression`<sup>Required</sup> <a name="RouteSelectionExpression" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.routeSelectionExpression"></a>

```csharp
public string RouteSelectionExpression { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApigatewayv2ApiBodyS3Location <a name="DataAwsccApigatewayv2ApiBodyS3Location" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3Location.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayv2ApiBodyS3Location {

};
```


### DataAwsccApigatewayv2ApiConfig <a name="DataAwsccApigatewayv2ApiConfig" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayv2ApiConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigatewayv2_api#id DataAwsccApigatewayv2Api#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApigatewayv2ApiCorsConfiguration <a name="DataAwsccApigatewayv2ApiCorsConfiguration" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayv2ApiCorsConfiguration {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApigatewayv2ApiBodyS3LocationOutputReference <a name="DataAwsccApigatewayv2ApiBodyS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayv2ApiBodyS3LocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3Location">DataAwsccApigatewayv2ApiBodyS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApigatewayv2ApiBodyS3Location InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3Location">DataAwsccApigatewayv2ApiBodyS3Location</a>

---


### DataAwsccApigatewayv2ApiCorsConfigurationOutputReference <a name="DataAwsccApigatewayv2ApiCorsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayv2ApiCorsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.allowCredentials">AllowCredentials</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.allowHeaders">AllowHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.allowMethods">AllowMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.allowOrigins">AllowOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.exposeHeaders">ExposeHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.maxAge">MaxAge</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfiguration">DataAwsccApigatewayv2ApiCorsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowCredentials`<sup>Required</sup> <a name="AllowCredentials" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.allowCredentials"></a>

```csharp
public IResolvable AllowCredentials { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AllowHeaders`<sup>Required</sup> <a name="AllowHeaders" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.allowHeaders"></a>

```csharp
public string[] AllowHeaders { get; }
```

- *Type:* string[]

---

##### `AllowMethods`<sup>Required</sup> <a name="AllowMethods" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.allowMethods"></a>

```csharp
public string[] AllowMethods { get; }
```

- *Type:* string[]

---

##### `AllowOrigins`<sup>Required</sup> <a name="AllowOrigins" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.allowOrigins"></a>

```csharp
public string[] AllowOrigins { get; }
```

- *Type:* string[]

---

##### `ExposeHeaders`<sup>Required</sup> <a name="ExposeHeaders" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.exposeHeaders"></a>

```csharp
public string[] ExposeHeaders { get; }
```

- *Type:* string[]

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.maxAge"></a>

```csharp
public double MaxAge { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApigatewayv2ApiCorsConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfiguration">DataAwsccApigatewayv2ApiCorsConfiguration</a>

---



