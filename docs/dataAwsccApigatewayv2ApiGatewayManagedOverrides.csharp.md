# `dataAwsccApigatewayv2ApiGatewayManagedOverrides` Submodule <a name="`dataAwsccApigatewayv2ApiGatewayManagedOverrides` Submodule" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApigatewayv2ApiGatewayManagedOverrides <a name="DataAwsccApigatewayv2ApiGatewayManagedOverrides" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/apigatewayv2_api_gateway_managed_overrides awscc_apigatewayv2_api_gateway_managed_overrides}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayv2ApiGatewayManagedOverrides(Construct Scope, string Id, DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig">DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig">DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApigatewayv2ApiGatewayManagedOverrides resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApigatewayv2ApiGatewayManagedOverrides.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApigatewayv2ApiGatewayManagedOverrides.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApigatewayv2ApiGatewayManagedOverrides.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApigatewayv2ApiGatewayManagedOverrides.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccApigatewayv2ApiGatewayManagedOverrides resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccApigatewayv2ApiGatewayManagedOverrides to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccApigatewayv2ApiGatewayManagedOverrides that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/apigatewayv2_api_gateway_managed_overrides#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApigatewayv2ApiGatewayManagedOverrides to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.apiGatewayManagedOverridesId">ApiGatewayManagedOverridesId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.apiId">ApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.integration">Integration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference">DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.route">Route</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference">DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.stage">Stage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference">DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ApiGatewayManagedOverridesId`<sup>Required</sup> <a name="ApiGatewayManagedOverridesId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.apiGatewayManagedOverridesId"></a>

```csharp
public string ApiGatewayManagedOverridesId { get; }
```

- *Type:* string

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.apiId"></a>

```csharp
public string ApiId { get; }
```

- *Type:* string

---

##### `Integration`<sup>Required</sup> <a name="Integration" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.integration"></a>

```csharp
public DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference Integration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference">DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference</a>

---

##### `Route`<sup>Required</sup> <a name="Route" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.route"></a>

```csharp
public DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference Route { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference">DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference</a>

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.stage"></a>

```csharp
public DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference Stage { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference">DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig <a name="DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/apigatewayv2_api_gateway_managed_overrides#id DataAwsccApigatewayv2ApiGatewayManagedOverrides#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegration <a name="DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegration" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegration {

};
```


### DataAwsccApigatewayv2ApiGatewayManagedOverridesRoute <a name="DataAwsccApigatewayv2ApiGatewayManagedOverridesRoute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRoute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayv2ApiGatewayManagedOverridesRoute {

};
```


### DataAwsccApigatewayv2ApiGatewayManagedOverridesStage <a name="DataAwsccApigatewayv2ApiGatewayManagedOverridesStage" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayv2ApiGatewayManagedOverridesStage {

};
```


### DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings <a name="DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings {

};
```


### DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings <a name="DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings {

};
```


### DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettings <a name="DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettings" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettings {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference <a name="DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.integrationMethod">IntegrationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.payloadFormatVersion">PayloadFormatVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.timeoutInMillis">TimeoutInMillis</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegration">DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `IntegrationMethod`<sup>Required</sup> <a name="IntegrationMethod" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.integrationMethod"></a>

```csharp
public string IntegrationMethod { get; }
```

- *Type:* string

---

##### `PayloadFormatVersion`<sup>Required</sup> <a name="PayloadFormatVersion" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.payloadFormatVersion"></a>

```csharp
public string PayloadFormatVersion { get; }
```

- *Type:* string

---

##### `TimeoutInMillis`<sup>Required</sup> <a name="TimeoutInMillis" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.timeoutInMillis"></a>

```csharp
public double TimeoutInMillis { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegration">DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegration</a>

---


### DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference <a name="DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.authorizationScopes">AuthorizationScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.authorizationType">AuthorizationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.authorizerId">AuthorizerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.operationName">OperationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRoute">DataAwsccApigatewayv2ApiGatewayManagedOverridesRoute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationScopes`<sup>Required</sup> <a name="AuthorizationScopes" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.authorizationScopes"></a>

```csharp
public string[] AuthorizationScopes { get; }
```

- *Type:* string[]

---

##### `AuthorizationType`<sup>Required</sup> <a name="AuthorizationType" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.authorizationType"></a>

```csharp
public string AuthorizationType { get; }
```

- *Type:* string

---

##### `AuthorizerId`<sup>Required</sup> <a name="AuthorizerId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.authorizerId"></a>

```csharp
public string AuthorizerId { get; }
```

- *Type:* string

---

##### `OperationName`<sup>Required</sup> <a name="OperationName" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.operationName"></a>

```csharp
public string OperationName { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApigatewayv2ApiGatewayManagedOverridesRoute InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRoute">DataAwsccApigatewayv2ApiGatewayManagedOverridesRoute</a>

---


### DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference <a name="DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.destinationArn">DestinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings">DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.destinationArn"></a>

```csharp
public string DestinationArn { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings">DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings</a>

---


### DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference <a name="DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabled">DetailedMetricsEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.throttlingBurstLimit">ThrottlingBurstLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.throttlingRateLimit">ThrottlingRateLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings">DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DetailedMetricsEnabled`<sup>Required</sup> <a name="DetailedMetricsEnabled" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabled"></a>

```csharp
public IResolvable DetailedMetricsEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ThrottlingBurstLimit`<sup>Required</sup> <a name="ThrottlingBurstLimit" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.throttlingBurstLimit"></a>

```csharp
public double ThrottlingBurstLimit { get; }
```

- *Type:* double

---

##### `ThrottlingRateLimit`<sup>Required</sup> <a name="ThrottlingRateLimit" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.throttlingRateLimit"></a>

```csharp
public double ThrottlingRateLimit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings">DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings</a>

---


### DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference <a name="DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.accessLogSettings">AccessLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference">DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.autoDeploy">AutoDeploy</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.defaultRouteSettings">DefaultRouteSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference">DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.routeSettings">RouteSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap">DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.stageVariables">StageVariables</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStage">DataAwsccApigatewayv2ApiGatewayManagedOverridesStage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessLogSettings`<sup>Required</sup> <a name="AccessLogSettings" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.accessLogSettings"></a>

```csharp
public DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference AccessLogSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference">DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference</a>

---

##### `AutoDeploy`<sup>Required</sup> <a name="AutoDeploy" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.autoDeploy"></a>

```csharp
public IResolvable AutoDeploy { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DefaultRouteSettings`<sup>Required</sup> <a name="DefaultRouteSettings" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.defaultRouteSettings"></a>

```csharp
public DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference DefaultRouteSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference">DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `RouteSettings`<sup>Required</sup> <a name="RouteSettings" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.routeSettings"></a>

```csharp
public DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap RouteSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap">DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap</a>

---

##### `StageVariables`<sup>Required</sup> <a name="StageVariables" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.stageVariables"></a>

```csharp
public StringMap StageVariables { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApigatewayv2ApiGatewayManagedOverridesStage InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStage">DataAwsccApigatewayv2ApiGatewayManagedOverridesStage</a>

---


### DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap <a name="DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.get"></a>

```csharp
private DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference <a name="DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.detailedMetricsEnabled">DetailedMetricsEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.throttlingBurstLimit">ThrottlingBurstLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.throttlingRateLimit">ThrottlingRateLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettings">DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DetailedMetricsEnabled`<sup>Required</sup> <a name="DetailedMetricsEnabled" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.detailedMetricsEnabled"></a>

```csharp
public IResolvable DetailedMetricsEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ThrottlingBurstLimit`<sup>Required</sup> <a name="ThrottlingBurstLimit" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.throttlingBurstLimit"></a>

```csharp
public double ThrottlingBurstLimit { get; }
```

- *Type:* double

---

##### `ThrottlingRateLimit`<sup>Required</sup> <a name="ThrottlingRateLimit" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.throttlingRateLimit"></a>

```csharp
public double ThrottlingRateLimit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettings">DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettings</a>

---



