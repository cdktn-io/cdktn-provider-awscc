# `dataAwsccApigatewayv2RouteResponse` Submodule <a name="`dataAwsccApigatewayv2RouteResponse` Submodule" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApigatewayv2RouteResponse <a name="DataAwsccApigatewayv2RouteResponse" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/apigatewayv2_route_response awscc_apigatewayv2_route_response}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayv2RouteResponse(Construct Scope, string Id, DataAwsccApigatewayv2RouteResponseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig">DataAwsccApigatewayv2RouteResponseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig">DataAwsccApigatewayv2RouteResponseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApigatewayv2RouteResponse resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApigatewayv2RouteResponse.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApigatewayv2RouteResponse.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApigatewayv2RouteResponse.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApigatewayv2RouteResponse.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccApigatewayv2RouteResponse resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccApigatewayv2RouteResponse to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccApigatewayv2RouteResponse that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/apigatewayv2_route_response#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApigatewayv2RouteResponse to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.apiId">ApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.modelSelectionExpression">ModelSelectionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.responseModels">ResponseModels</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.responseParameters">ResponseParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap">DataAwsccApigatewayv2RouteResponseResponseParametersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.routeId">RouteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.routeResponseId">RouteResponseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.routeResponseKey">RouteResponseKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.apiId"></a>

```csharp
public string ApiId { get; }
```

- *Type:* string

---

##### `ModelSelectionExpression`<sup>Required</sup> <a name="ModelSelectionExpression" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.modelSelectionExpression"></a>

```csharp
public string ModelSelectionExpression { get; }
```

- *Type:* string

---

##### `ResponseModels`<sup>Required</sup> <a name="ResponseModels" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.responseModels"></a>

```csharp
public string ResponseModels { get; }
```

- *Type:* string

---

##### `ResponseParameters`<sup>Required</sup> <a name="ResponseParameters" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.responseParameters"></a>

```csharp
public DataAwsccApigatewayv2RouteResponseResponseParametersMap ResponseParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap">DataAwsccApigatewayv2RouteResponseResponseParametersMap</a>

---

##### `RouteId`<sup>Required</sup> <a name="RouteId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.routeId"></a>

```csharp
public string RouteId { get; }
```

- *Type:* string

---

##### `RouteResponseId`<sup>Required</sup> <a name="RouteResponseId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.routeResponseId"></a>

```csharp
public string RouteResponseId { get; }
```

- *Type:* string

---

##### `RouteResponseKey`<sup>Required</sup> <a name="RouteResponseKey" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.routeResponseKey"></a>

```csharp
public string RouteResponseKey { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApigatewayv2RouteResponseConfig <a name="DataAwsccApigatewayv2RouteResponseConfig" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayv2RouteResponseConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/apigatewayv2_route_response#id DataAwsccApigatewayv2RouteResponse#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApigatewayv2RouteResponseResponseParameters <a name="DataAwsccApigatewayv2RouteResponseResponseParameters" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayv2RouteResponseResponseParameters {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApigatewayv2RouteResponseResponseParametersMap <a name="DataAwsccApigatewayv2RouteResponseResponseParametersMap" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayv2RouteResponseResponseParametersMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.get"></a>

```csharp
private DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference <a name="DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.property.required">Required</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParameters">DataAwsccApigatewayv2RouteResponseResponseParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.property.required"></a>

```csharp
public IResolvable Required { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApigatewayv2RouteResponseResponseParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParameters">DataAwsccApigatewayv2RouteResponseResponseParameters</a>

---



