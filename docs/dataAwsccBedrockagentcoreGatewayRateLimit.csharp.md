# `dataAwsccBedrockagentcoreGatewayRateLimit` Submodule <a name="`dataAwsccBedrockagentcoreGatewayRateLimit` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockagentcoreGatewayRateLimit <a name="DataAwsccBedrockagentcoreGatewayRateLimit" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrockagentcore_gateway_rate_limit awscc_bedrockagentcore_gateway_rate_limit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreGatewayRateLimit(Construct Scope, string Id, DataAwsccBedrockagentcoreGatewayRateLimitConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig">DataAwsccBedrockagentcoreGatewayRateLimitConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig">DataAwsccBedrockagentcoreGatewayRateLimitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockagentcoreGatewayRateLimit resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockagentcoreGatewayRateLimit.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockagentcoreGatewayRateLimit.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockagentcoreGatewayRateLimit.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockagentcoreGatewayRateLimit.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccBedrockagentcoreGatewayRateLimit resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBedrockagentcoreGatewayRateLimit to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBedrockagentcoreGatewayRateLimit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrockagentcore_gateway_rate_limit#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockagentcoreGatewayRateLimit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.dimensionKeys">DimensionKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.entries">Entries</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList">DataAwsccBedrockagentcoreGatewayRateLimitEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.gatewayIdentifier">GatewayIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.rateLimitId">RateLimitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DimensionKeys`<sup>Required</sup> <a name="DimensionKeys" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.dimensionKeys"></a>

```csharp
public string[] DimensionKeys { get; }
```

- *Type:* string[]

---

##### `Entries`<sup>Required</sup> <a name="Entries" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.entries"></a>

```csharp
public DataAwsccBedrockagentcoreGatewayRateLimitEntriesList Entries { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList">DataAwsccBedrockagentcoreGatewayRateLimitEntriesList</a>

---

##### `GatewayIdentifier`<sup>Required</sup> <a name="GatewayIdentifier" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.gatewayIdentifier"></a>

```csharp
public string GatewayIdentifier { get; }
```

- *Type:* string

---

##### `RateLimitId`<sup>Required</sup> <a name="RateLimitId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.rateLimitId"></a>

```csharp
public string RateLimitId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockagentcoreGatewayRateLimitConfig <a name="DataAwsccBedrockagentcoreGatewayRateLimitConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreGatewayRateLimitConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrockagentcore_gateway_rate_limit#id DataAwsccBedrockagentcoreGatewayRateLimit#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockagentcoreGatewayRateLimitEntries <a name="DataAwsccBedrockagentcoreGatewayRateLimitEntries" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntries.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreGatewayRateLimitEntries {

};
```


### DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnections <a name="DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnections" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnections.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnections {

};
```


### DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequests <a name="DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequests" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequests.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequests {

};
```


### DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokens <a name="DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokens" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokens"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokens.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokens {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList <a name="DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.get"></a>

```csharp
private DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference <a name="DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.period">Period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.rate">Rate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnections">DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.period"></a>

```csharp
public string Period { get; }
```

- *Type:* string

---

##### `Rate`<sup>Required</sup> <a name="Rate" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.rate"></a>

```csharp
public double Rate { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnections InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnections">DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnections</a>

---


### DataAwsccBedrockagentcoreGatewayRateLimitEntriesList <a name="DataAwsccBedrockagentcoreGatewayRateLimitEntriesList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreGatewayRateLimitEntriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.get"></a>

```csharp
private DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference <a name="DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.property.connections">Connections</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList">DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.property.dimensions">Dimensions</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.property.requests">Requests</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList">DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.property.tokens">Tokens</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList">DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntries">DataAwsccBedrockagentcoreGatewayRateLimitEntries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Connections`<sup>Required</sup> <a name="Connections" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.property.connections"></a>

```csharp
public DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList Connections { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList">DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList</a>

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.property.dimensions"></a>

```csharp
public StringMap Dimensions { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Requests`<sup>Required</sup> <a name="Requests" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.property.requests"></a>

```csharp
public DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList Requests { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList">DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList</a>

---

##### `Tokens`<sup>Required</sup> <a name="Tokens" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.property.tokens"></a>

```csharp
public DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList Tokens { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList">DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreGatewayRateLimitEntries InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntries">DataAwsccBedrockagentcoreGatewayRateLimitEntries</a>

---


### DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList <a name="DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.get"></a>

```csharp
private DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference <a name="DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.period">Period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.rate">Rate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequests">DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequests</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.period"></a>

```csharp
public string Period { get; }
```

- *Type:* string

---

##### `Rate`<sup>Required</sup> <a name="Rate" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.rate"></a>

```csharp
public double Rate { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequests InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequests">DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequests</a>

---


### DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList <a name="DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.get"></a>

```csharp
private DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference <a name="DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.period">Period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.rate">Rate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokens">DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokens</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.period"></a>

```csharp
public string Period { get; }
```

- *Type:* string

---

##### `Rate`<sup>Required</sup> <a name="Rate" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.rate"></a>

```csharp
public double Rate { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokens InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokens">DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokens</a>

---



