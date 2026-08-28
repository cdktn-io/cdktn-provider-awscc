# `dataAwsccMediapackagev2OriginEndpoint` Submodule <a name="`dataAwsccMediapackagev2OriginEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediapackagev2OriginEndpoint <a name="DataAwsccMediapackagev2OriginEndpoint" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediapackagev2_origin_endpoint awscc_mediapackagev2_origin_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpoint(Construct Scope, string Id, DataAwsccMediapackagev2OriginEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig">DataAwsccMediapackagev2OriginEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig">DataAwsccMediapackagev2OriginEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMediapackagev2OriginEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMediapackagev2OriginEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMediapackagev2OriginEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMediapackagev2OriginEndpoint.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMediapackagev2OriginEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccMediapackagev2OriginEndpoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMediapackagev2OriginEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMediapackagev2OriginEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediapackagev2_origin_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediapackagev2OriginEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.channelGroupName">ChannelGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.channelName">ChannelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.containerType">ContainerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.dashManifests">DashManifests</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList">DataAwsccMediapackagev2OriginEndpointDashManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.dashManifestUrls">DashManifestUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.forceEndpointErrorConfiguration">ForceEndpointErrorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.hlsManifests">HlsManifests</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList">DataAwsccMediapackagev2OriginEndpointHlsManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.hlsManifestUrls">HlsManifestUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.lowLatencyHlsManifests">LowLatencyHlsManifests</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.lowLatencyHlsManifestUrls">LowLatencyHlsManifestUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.mssManifests">MssManifests</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList">DataAwsccMediapackagev2OriginEndpointMssManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.mssManifestUrls">MssManifestUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.originEndpointName">OriginEndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.segment">Segment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.startoverWindowSeconds">StartoverWindowSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList">DataAwsccMediapackagev2OriginEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.uriSeparator">UriSeparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ChannelGroupName`<sup>Required</sup> <a name="ChannelGroupName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.channelGroupName"></a>

```csharp
public string ChannelGroupName { get; }
```

- *Type:* string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.channelName"></a>

```csharp
public string ChannelName { get; }
```

- *Type:* string

---

##### `ContainerType`<sup>Required</sup> <a name="ContainerType" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.containerType"></a>

```csharp
public string ContainerType { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DashManifests`<sup>Required</sup> <a name="DashManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.dashManifests"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointDashManifestsList DashManifests { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList">DataAwsccMediapackagev2OriginEndpointDashManifestsList</a>

---

##### `DashManifestUrls`<sup>Required</sup> <a name="DashManifestUrls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.dashManifestUrls"></a>

```csharp
public string[] DashManifestUrls { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ForceEndpointErrorConfiguration`<sup>Required</sup> <a name="ForceEndpointErrorConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.forceEndpointErrorConfiguration"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference ForceEndpointErrorConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference</a>

---

##### `HlsManifests`<sup>Required</sup> <a name="HlsManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.hlsManifests"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointHlsManifestsList HlsManifests { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList">DataAwsccMediapackagev2OriginEndpointHlsManifestsList</a>

---

##### `HlsManifestUrls`<sup>Required</sup> <a name="HlsManifestUrls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.hlsManifestUrls"></a>

```csharp
public string[] HlsManifestUrls { get; }
```

- *Type:* string[]

---

##### `LowLatencyHlsManifests`<sup>Required</sup> <a name="LowLatencyHlsManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.lowLatencyHlsManifests"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList LowLatencyHlsManifests { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList</a>

---

##### `LowLatencyHlsManifestUrls`<sup>Required</sup> <a name="LowLatencyHlsManifestUrls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.lowLatencyHlsManifestUrls"></a>

```csharp
public string[] LowLatencyHlsManifestUrls { get; }
```

- *Type:* string[]

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `MssManifests`<sup>Required</sup> <a name="MssManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.mssManifests"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointMssManifestsList MssManifests { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList">DataAwsccMediapackagev2OriginEndpointMssManifestsList</a>

---

##### `MssManifestUrls`<sup>Required</sup> <a name="MssManifestUrls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.mssManifestUrls"></a>

```csharp
public string[] MssManifestUrls { get; }
```

- *Type:* string[]

---

##### `OriginEndpointName`<sup>Required</sup> <a name="OriginEndpointName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.originEndpointName"></a>

```csharp
public string OriginEndpointName { get; }
```

- *Type:* string

---

##### `Segment`<sup>Required</sup> <a name="Segment" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.segment"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointSegmentOutputReference Segment { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentOutputReference</a>

---

##### `StartoverWindowSeconds`<sup>Required</sup> <a name="StartoverWindowSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.startoverWindowSeconds"></a>

```csharp
public double StartoverWindowSeconds { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.tags"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList">DataAwsccMediapackagev2OriginEndpointTagsList</a>

---

##### `UriSeparator`<sup>Required</sup> <a name="UriSeparator" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.uriSeparator"></a>

```csharp
public string UriSeparator { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediapackagev2OriginEndpointConfig <a name="DataAwsccMediapackagev2OriginEndpointConfig" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediapackagev2_origin_endpoint#id DataAwsccMediapackagev2OriginEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediapackagev2OriginEndpointDashManifests <a name="DataAwsccMediapackagev2OriginEndpointDashManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifests.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointDashManifests {

};
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration {

};
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls {

};
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings {

};
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics {

};
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload {

};
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration {

};
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation {

};
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash {

};
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration {

};
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration {

};
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming {

};
```


### DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration <a name="DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration {

};
```


### DataAwsccMediapackagev2OriginEndpointHlsManifests <a name="DataAwsccMediapackagev2OriginEndpointHlsManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifests.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointHlsManifests {

};
```


### DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration <a name="DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration {

};
```


### DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls <a name="DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls {

};
```


### DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag <a name="DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag {

};
```


### DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests <a name="DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests {

};
```


### DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration <a name="DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration {

};
```


### DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls <a name="DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls {

};
```


### DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag <a name="DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag {

};
```


### DataAwsccMediapackagev2OriginEndpointMssManifests <a name="DataAwsccMediapackagev2OriginEndpointMssManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifests.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointMssManifests {

};
```


### DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration <a name="DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration {

};
```


### DataAwsccMediapackagev2OriginEndpointSegment <a name="DataAwsccMediapackagev2OriginEndpointSegment" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointSegment {

};
```


### DataAwsccMediapackagev2OriginEndpointSegmentEncryption <a name="DataAwsccMediapackagev2OriginEndpointSegmentEncryption" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointSegmentEncryption {

};
```


### DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod <a name="DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod {

};
```


### DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider <a name="DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider {

};
```


### DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration <a name="DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration {

};
```


### DataAwsccMediapackagev2OriginEndpointSegmentScte <a name="DataAwsccMediapackagev2OriginEndpointSegmentScte" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScte"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScte.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointSegmentScte {

};
```


### DataAwsccMediapackagev2OriginEndpointTags <a name="DataAwsccMediapackagev2OriginEndpointTags" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.fixedAvailabilityStartTime">FixedAvailabilityStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration">DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FixedAvailabilityStartTime`<sup>Required</sup> <a name="FixedAvailabilityStartTime" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.fixedAvailabilityStartTime"></a>

```csharp
public string FixedAvailabilityStartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration">DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.get"></a>

```csharp
private DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.dvbPriority">DvbPriority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.dvbWeight">DvbWeight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.serviceLocation">ServiceLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls">DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DvbPriority`<sup>Required</sup> <a name="DvbPriority" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.dvbPriority"></a>

```csharp
public double DvbPriority { get; }
```

- *Type:* double

---

##### `DvbWeight`<sup>Required</sup> <a name="DvbWeight" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.dvbWeight"></a>

```csharp
public double DvbWeight { get; }
```

- *Type:* double

---

##### `ServiceLocation`<sup>Required</sup> <a name="ServiceLocation" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.serviceLocation"></a>

```csharp
public string ServiceLocation { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls">DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.get"></a>

```csharp
private DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.probability">Probability</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.reportingUrl">ReportingUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Probability`<sup>Required</sup> <a name="Probability" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.probability"></a>

```csharp
public double Probability { get; }
```

- *Type:* double

---

##### `ReportingUrl`<sup>Required</sup> <a name="ReportingUrl" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.reportingUrl"></a>

```csharp
public string ReportingUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.fontFamily">FontFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.mimeType">MimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FontFamily`<sup>Required</sup> <a name="FontFamily" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.fontFamily"></a>

```csharp
public string FontFamily { get; }
```

- *Type:* string

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.mimeType"></a>

```csharp
public string MimeType { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.errorMetrics">ErrorMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.fontDownload">FontDownload</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorMetrics`<sup>Required</sup> <a name="ErrorMetrics" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.errorMetrics"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList ErrorMetrics { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList</a>

---

##### `FontDownload`<sup>Required</sup> <a name="FontDownload" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.fontDownload"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference FontDownload { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.clipStartTime">ClipStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.drmSettings">DrmSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.end">End</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.manifestFilter">ManifestFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.start">Start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.timeDelaySeconds">TimeDelaySeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration">DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClipStartTime`<sup>Required</sup> <a name="ClipStartTime" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.clipStartTime"></a>

```csharp
public string ClipStartTime { get; }
```

- *Type:* string

---

##### `DrmSettings`<sup>Required</sup> <a name="DrmSettings" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.drmSettings"></a>

```csharp
public string DrmSettings { get; }
```

- *Type:* string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.end"></a>

```csharp
public string End { get; }
```

- *Type:* string

---

##### `ManifestFilter`<sup>Required</sup> <a name="ManifestFilter" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.manifestFilter"></a>

```csharp
public string ManifestFilter { get; }
```

- *Type:* string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.start"></a>

```csharp
public string Start { get; }
```

- *Type:* string

---

##### `TimeDelaySeconds`<sup>Required</sup> <a name="TimeDelaySeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.timeDelaySeconds"></a>

```csharp
public double TimeDelaySeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration">DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsList <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsList" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointDashManifestsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.get"></a>

```csharp
private DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.audioTimelinePattern">AudioTimelinePattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.availabilityStartTimeConfiguration">AvailabilityStartTimeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.baseUrls">BaseUrls</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList">DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.compactness">Compactness</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.drmSignaling">DrmSignaling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.dvbSettings">DvbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.filterConfiguration">FilterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.manifestName">ManifestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.manifestWindowSeconds">ManifestWindowSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.minBufferTimeSeconds">MinBufferTimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.minUpdatePeriodSeconds">MinUpdatePeriodSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.periodTriggers">PeriodTriggers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.profiles">Profiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.programInformation">ProgramInformation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.scteDash">ScteDash</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.segmentTemplateFormat">SegmentTemplateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.subtitleConfiguration">SubtitleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.suggestedPresentationDelaySeconds">SuggestedPresentationDelaySeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.uriPathType">UriPathType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.utcTiming">UtcTiming</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifests">DataAwsccMediapackagev2OriginEndpointDashManifests</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudioTimelinePattern`<sup>Required</sup> <a name="AudioTimelinePattern" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.audioTimelinePattern"></a>

```csharp
public string AudioTimelinePattern { get; }
```

- *Type:* string

---

##### `AvailabilityStartTimeConfiguration`<sup>Required</sup> <a name="AvailabilityStartTimeConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.availabilityStartTimeConfiguration"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference AvailabilityStartTimeConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference</a>

---

##### `BaseUrls`<sup>Required</sup> <a name="BaseUrls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.baseUrls"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList BaseUrls { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList">DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList</a>

---

##### `Compactness`<sup>Required</sup> <a name="Compactness" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.compactness"></a>

```csharp
public string Compactness { get; }
```

- *Type:* string

---

##### `DrmSignaling`<sup>Required</sup> <a name="DrmSignaling" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.drmSignaling"></a>

```csharp
public string DrmSignaling { get; }
```

- *Type:* string

---

##### `DvbSettings`<sup>Required</sup> <a name="DvbSettings" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.dvbSettings"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference DvbSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference</a>

---

##### `FilterConfiguration`<sup>Required</sup> <a name="FilterConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.filterConfiguration"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference FilterConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference</a>

---

##### `ManifestName`<sup>Required</sup> <a name="ManifestName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.manifestName"></a>

```csharp
public string ManifestName { get; }
```

- *Type:* string

---

##### `ManifestWindowSeconds`<sup>Required</sup> <a name="ManifestWindowSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.manifestWindowSeconds"></a>

```csharp
public double ManifestWindowSeconds { get; }
```

- *Type:* double

---

##### `MinBufferTimeSeconds`<sup>Required</sup> <a name="MinBufferTimeSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.minBufferTimeSeconds"></a>

```csharp
public double MinBufferTimeSeconds { get; }
```

- *Type:* double

---

##### `MinUpdatePeriodSeconds`<sup>Required</sup> <a name="MinUpdatePeriodSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.minUpdatePeriodSeconds"></a>

```csharp
public double MinUpdatePeriodSeconds { get; }
```

- *Type:* double

---

##### `PeriodTriggers`<sup>Required</sup> <a name="PeriodTriggers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.periodTriggers"></a>

```csharp
public string[] PeriodTriggers { get; }
```

- *Type:* string[]

---

##### `Profiles`<sup>Required</sup> <a name="Profiles" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.profiles"></a>

```csharp
public string[] Profiles { get; }
```

- *Type:* string[]

---

##### `ProgramInformation`<sup>Required</sup> <a name="ProgramInformation" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.programInformation"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference ProgramInformation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference</a>

---

##### `ScteDash`<sup>Required</sup> <a name="ScteDash" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.scteDash"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference ScteDash { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference</a>

---

##### `SegmentTemplateFormat`<sup>Required</sup> <a name="SegmentTemplateFormat" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.segmentTemplateFormat"></a>

```csharp
public string SegmentTemplateFormat { get; }
```

- *Type:* string

---

##### `SubtitleConfiguration`<sup>Required</sup> <a name="SubtitleConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.subtitleConfiguration"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference SubtitleConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference</a>

---

##### `SuggestedPresentationDelaySeconds`<sup>Required</sup> <a name="SuggestedPresentationDelaySeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.suggestedPresentationDelaySeconds"></a>

```csharp
public double SuggestedPresentationDelaySeconds { get; }
```

- *Type:* double

---

##### `UriPathType`<sup>Required</sup> <a name="UriPathType" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.uriPathType"></a>

```csharp
public string UriPathType { get; }
```

- *Type:* string

---

##### `UtcTiming`<sup>Required</sup> <a name="UtcTiming" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.utcTiming"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference UtcTiming { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointDashManifests InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifests">DataAwsccMediapackagev2OriginEndpointDashManifests</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.copyright">Copyright</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.languageCode">LanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.moreInformationUrl">MoreInformationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation">DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Copyright`<sup>Required</sup> <a name="Copyright" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.copyright"></a>

```csharp
public string Copyright { get; }
```

- *Type:* string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.languageCode"></a>

```csharp
public string LanguageCode { get; }
```

- *Type:* string

---

##### `MoreInformationUrl`<sup>Required</sup> <a name="MoreInformationUrl" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.moreInformationUrl"></a>

```csharp
public string MoreInformationUrl { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation">DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.adMarkerDash">AdMarkerDash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.scteInManifests">ScteInManifests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash">DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdMarkerDash`<sup>Required</sup> <a name="AdMarkerDash" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.adMarkerDash"></a>

```csharp
public string AdMarkerDash { get; }
```

- *Type:* string

---

##### `ScteInManifests`<sup>Required</sup> <a name="ScteInManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.scteInManifests"></a>

```csharp
public string ScteInManifests { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash">DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.ttmlConfiguration">TtmlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration">DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TtmlConfiguration`<sup>Required</sup> <a name="TtmlConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.ttmlConfiguration"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference TtmlConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration">DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.ttmlProfile">TtmlProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration">DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TtmlProfile`<sup>Required</sup> <a name="TtmlProfile" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.ttmlProfile"></a>

```csharp
public string TtmlProfile { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration">DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.timingMode">TimingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.timingSource">TimingSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming">DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimingMode`<sup>Required</sup> <a name="TimingMode" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.timingMode"></a>

```csharp
public string TimingMode { get; }
```

- *Type:* string

---

##### `TimingSource`<sup>Required</sup> <a name="TimingSource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.timingSource"></a>

```csharp
public string TimingSource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming">DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming</a>

---


### DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.endpointErrorConditions">EndpointErrorConditions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration">DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointErrorConditions`<sup>Required</sup> <a name="EndpointErrorConditions" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.endpointErrorConditions"></a>

```csharp
public string[] EndpointErrorConditions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration">DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration</a>

---


### DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.clipStartTime">ClipStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.drmSettings">DrmSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.end">End</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.manifestFilter">ManifestFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.start">Start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.timeDelaySeconds">TimeDelaySeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration">DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClipStartTime`<sup>Required</sup> <a name="ClipStartTime" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.clipStartTime"></a>

```csharp
public string ClipStartTime { get; }
```

- *Type:* string

---

##### `DrmSettings`<sup>Required</sup> <a name="DrmSettings" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.drmSettings"></a>

```csharp
public string DrmSettings { get; }
```

- *Type:* string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.end"></a>

```csharp
public string End { get; }
```

- *Type:* string

---

##### `ManifestFilter`<sup>Required</sup> <a name="ManifestFilter" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.manifestFilter"></a>

```csharp
public string ManifestFilter { get; }
```

- *Type:* string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.start"></a>

```csharp
public string Start { get; }
```

- *Type:* string

---

##### `TimeDelaySeconds`<sup>Required</sup> <a name="TimeDelaySeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.timeDelaySeconds"></a>

```csharp
public double TimeDelaySeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration">DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration</a>

---


### DataAwsccMediapackagev2OriginEndpointHlsManifestsList <a name="DataAwsccMediapackagev2OriginEndpointHlsManifestsList" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointHlsManifestsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.get"></a>

```csharp
private DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference <a name="DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.childManifestName">ChildManifestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.filterConfiguration">FilterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.manifestName">ManifestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.manifestWindowSeconds">ManifestWindowSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.programDateTimeIntervalSeconds">ProgramDateTimeIntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.scteHls">ScteHls</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference">DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.startTag">StartTag</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference">DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.uriPathType">UriPathType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.urlEncodeChildManifest">UrlEncodeChildManifest</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifests">DataAwsccMediapackagev2OriginEndpointHlsManifests</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChildManifestName`<sup>Required</sup> <a name="ChildManifestName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.childManifestName"></a>

```csharp
public string ChildManifestName { get; }
```

- *Type:* string

---

##### `FilterConfiguration`<sup>Required</sup> <a name="FilterConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.filterConfiguration"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference FilterConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference</a>

---

##### `ManifestName`<sup>Required</sup> <a name="ManifestName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.manifestName"></a>

```csharp
public string ManifestName { get; }
```

- *Type:* string

---

##### `ManifestWindowSeconds`<sup>Required</sup> <a name="ManifestWindowSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.manifestWindowSeconds"></a>

```csharp
public double ManifestWindowSeconds { get; }
```

- *Type:* double

---

##### `ProgramDateTimeIntervalSeconds`<sup>Required</sup> <a name="ProgramDateTimeIntervalSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.programDateTimeIntervalSeconds"></a>

```csharp
public double ProgramDateTimeIntervalSeconds { get; }
```

- *Type:* double

---

##### `ScteHls`<sup>Required</sup> <a name="ScteHls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.scteHls"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference ScteHls { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference">DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference</a>

---

##### `StartTag`<sup>Required</sup> <a name="StartTag" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.startTag"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference StartTag { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference">DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference</a>

---

##### `UriPathType`<sup>Required</sup> <a name="UriPathType" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.uriPathType"></a>

```csharp
public string UriPathType { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `UrlEncodeChildManifest`<sup>Required</sup> <a name="UrlEncodeChildManifest" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.urlEncodeChildManifest"></a>

```csharp
public IResolvable UrlEncodeChildManifest { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointHlsManifests InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifests">DataAwsccMediapackagev2OriginEndpointHlsManifests</a>

---


### DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference <a name="DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.adMarkerHls">AdMarkerHls</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.scteInManifests">ScteInManifests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls">DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdMarkerHls`<sup>Required</sup> <a name="AdMarkerHls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.adMarkerHls"></a>

```csharp
public string AdMarkerHls { get; }
```

- *Type:* string

---

##### `ScteInManifests`<sup>Required</sup> <a name="ScteInManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.scteInManifests"></a>

```csharp
public string ScteInManifests { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls">DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls</a>

---


### DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference <a name="DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.precise">Precise</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.timeOffset">TimeOffset</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag">DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Precise`<sup>Required</sup> <a name="Precise" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.precise"></a>

```csharp
public IResolvable Precise { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `TimeOffset`<sup>Required</sup> <a name="TimeOffset" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.timeOffset"></a>

```csharp
public double TimeOffset { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag">DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag</a>

---


### DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.clipStartTime">ClipStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.drmSettings">DrmSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.end">End</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.manifestFilter">ManifestFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.start">Start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.timeDelaySeconds">TimeDelaySeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClipStartTime`<sup>Required</sup> <a name="ClipStartTime" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.clipStartTime"></a>

```csharp
public string ClipStartTime { get; }
```

- *Type:* string

---

##### `DrmSettings`<sup>Required</sup> <a name="DrmSettings" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.drmSettings"></a>

```csharp
public string DrmSettings { get; }
```

- *Type:* string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.end"></a>

```csharp
public string End { get; }
```

- *Type:* string

---

##### `ManifestFilter`<sup>Required</sup> <a name="ManifestFilter" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.manifestFilter"></a>

```csharp
public string ManifestFilter { get; }
```

- *Type:* string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.start"></a>

```csharp
public string Start { get; }
```

- *Type:* string

---

##### `TimeDelaySeconds`<sup>Required</sup> <a name="TimeDelaySeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.timeDelaySeconds"></a>

```csharp
public double TimeDelaySeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration</a>

---


### DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList <a name="DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.get"></a>

```csharp
private DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference <a name="DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.childManifestName">ChildManifestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.filterConfiguration">FilterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.manifestName">ManifestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.manifestWindowSeconds">ManifestWindowSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.programDateTimeIntervalSeconds">ProgramDateTimeIntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.scteHls">ScteHls</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.startTag">StartTag</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.uriPathType">UriPathType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.urlEncodeChildManifest">UrlEncodeChildManifest</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChildManifestName`<sup>Required</sup> <a name="ChildManifestName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.childManifestName"></a>

```csharp
public string ChildManifestName { get; }
```

- *Type:* string

---

##### `FilterConfiguration`<sup>Required</sup> <a name="FilterConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.filterConfiguration"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference FilterConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference</a>

---

##### `ManifestName`<sup>Required</sup> <a name="ManifestName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.manifestName"></a>

```csharp
public string ManifestName { get; }
```

- *Type:* string

---

##### `ManifestWindowSeconds`<sup>Required</sup> <a name="ManifestWindowSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.manifestWindowSeconds"></a>

```csharp
public double ManifestWindowSeconds { get; }
```

- *Type:* double

---

##### `ProgramDateTimeIntervalSeconds`<sup>Required</sup> <a name="ProgramDateTimeIntervalSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.programDateTimeIntervalSeconds"></a>

```csharp
public double ProgramDateTimeIntervalSeconds { get; }
```

- *Type:* double

---

##### `ScteHls`<sup>Required</sup> <a name="ScteHls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.scteHls"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference ScteHls { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference</a>

---

##### `StartTag`<sup>Required</sup> <a name="StartTag" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.startTag"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference StartTag { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference</a>

---

##### `UriPathType`<sup>Required</sup> <a name="UriPathType" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.uriPathType"></a>

```csharp
public string UriPathType { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `UrlEncodeChildManifest`<sup>Required</sup> <a name="UrlEncodeChildManifest" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.urlEncodeChildManifest"></a>

```csharp
public IResolvable UrlEncodeChildManifest { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests</a>

---


### DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference <a name="DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.adMarkerHls">AdMarkerHls</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.scteInManifests">ScteInManifests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdMarkerHls`<sup>Required</sup> <a name="AdMarkerHls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.adMarkerHls"></a>

```csharp
public string AdMarkerHls { get; }
```

- *Type:* string

---

##### `ScteInManifests`<sup>Required</sup> <a name="ScteInManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.scteInManifests"></a>

```csharp
public string ScteInManifests { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls</a>

---


### DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference <a name="DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.precise">Precise</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.timeOffset">TimeOffset</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Precise`<sup>Required</sup> <a name="Precise" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.precise"></a>

```csharp
public IResolvable Precise { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `TimeOffset`<sup>Required</sup> <a name="TimeOffset" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.timeOffset"></a>

```csharp
public double TimeOffset { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag</a>

---


### DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.clipStartTime">ClipStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.drmSettings">DrmSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.end">End</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.manifestFilter">ManifestFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.start">Start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.timeDelaySeconds">TimeDelaySeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration">DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClipStartTime`<sup>Required</sup> <a name="ClipStartTime" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.clipStartTime"></a>

```csharp
public string ClipStartTime { get; }
```

- *Type:* string

---

##### `DrmSettings`<sup>Required</sup> <a name="DrmSettings" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.drmSettings"></a>

```csharp
public string DrmSettings { get; }
```

- *Type:* string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.end"></a>

```csharp
public string End { get; }
```

- *Type:* string

---

##### `ManifestFilter`<sup>Required</sup> <a name="ManifestFilter" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.manifestFilter"></a>

```csharp
public string ManifestFilter { get; }
```

- *Type:* string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.start"></a>

```csharp
public string Start { get; }
```

- *Type:* string

---

##### `TimeDelaySeconds`<sup>Required</sup> <a name="TimeDelaySeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.timeDelaySeconds"></a>

```csharp
public double TimeDelaySeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration">DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration</a>

---


### DataAwsccMediapackagev2OriginEndpointMssManifestsList <a name="DataAwsccMediapackagev2OriginEndpointMssManifestsList" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointMssManifestsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.get"></a>

```csharp
private DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference <a name="DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.filterConfiguration">FilterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestLayout">ManifestLayout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestName">ManifestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestWindowSeconds">ManifestWindowSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifests">DataAwsccMediapackagev2OriginEndpointMssManifests</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterConfiguration`<sup>Required</sup> <a name="FilterConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.filterConfiguration"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference FilterConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference</a>

---

##### `ManifestLayout`<sup>Required</sup> <a name="ManifestLayout" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestLayout"></a>

```csharp
public string ManifestLayout { get; }
```

- *Type:* string

---

##### `ManifestName`<sup>Required</sup> <a name="ManifestName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestName"></a>

```csharp
public string ManifestName { get; }
```

- *Type:* string

---

##### `ManifestWindowSeconds`<sup>Required</sup> <a name="ManifestWindowSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestWindowSeconds"></a>

```csharp
public double ManifestWindowSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointMssManifests InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifests">DataAwsccMediapackagev2OriginEndpointMssManifests</a>

---


### DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference <a name="DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.cmafEncryptionMethod">CmafEncryptionMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.ismEncryptionMethod">IsmEncryptionMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.tsEncryptionMethod">TsEncryptionMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CmafEncryptionMethod`<sup>Required</sup> <a name="CmafEncryptionMethod" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.cmafEncryptionMethod"></a>

```csharp
public string CmafEncryptionMethod { get; }
```

- *Type:* string

---

##### `IsmEncryptionMethod`<sup>Required</sup> <a name="IsmEncryptionMethod" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.ismEncryptionMethod"></a>

```csharp
public string IsmEncryptionMethod { get; }
```

- *Type:* string

---

##### `TsEncryptionMethod`<sup>Required</sup> <a name="TsEncryptionMethod" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.tsEncryptionMethod"></a>

```csharp
public string TsEncryptionMethod { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod</a>

---


### DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference <a name="DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.cmafExcludeSegmentDrmMetadata">CmafExcludeSegmentDrmMetadata</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.constantInitializationVector">ConstantInitializationVector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.encryptionMethod">EncryptionMethod</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.keyRotationIntervalSeconds">KeyRotationIntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.spekeKeyProvider">SpekeKeyProvider</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryption">DataAwsccMediapackagev2OriginEndpointSegmentEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CmafExcludeSegmentDrmMetadata`<sup>Required</sup> <a name="CmafExcludeSegmentDrmMetadata" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.cmafExcludeSegmentDrmMetadata"></a>

```csharp
public IResolvable CmafExcludeSegmentDrmMetadata { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ConstantInitializationVector`<sup>Required</sup> <a name="ConstantInitializationVector" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.constantInitializationVector"></a>

```csharp
public string ConstantInitializationVector { get; }
```

- *Type:* string

---

##### `EncryptionMethod`<sup>Required</sup> <a name="EncryptionMethod" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.encryptionMethod"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference EncryptionMethod { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference</a>

---

##### `KeyRotationIntervalSeconds`<sup>Required</sup> <a name="KeyRotationIntervalSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.keyRotationIntervalSeconds"></a>

```csharp
public double KeyRotationIntervalSeconds { get; }
```

- *Type:* double

---

##### `SpekeKeyProvider`<sup>Required</sup> <a name="SpekeKeyProvider" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.spekeKeyProvider"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference SpekeKeyProvider { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointSegmentEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryption">DataAwsccMediapackagev2OriginEndpointSegmentEncryption</a>

---


### DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio">PresetSpeke20Audio</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video">PresetSpeke20Video</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PresetSpeke20Audio`<sup>Required</sup> <a name="PresetSpeke20Audio" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio"></a>

```csharp
public string PresetSpeke20Audio { get; }
```

- *Type:* string

---

##### `PresetSpeke20Video`<sup>Required</sup> <a name="PresetSpeke20Video" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video"></a>

```csharp
public string PresetSpeke20Video { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---


### DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference <a name="DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.drmSystems">DrmSystems</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration">EncryptionContractConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `DrmSystems`<sup>Required</sup> <a name="DrmSystems" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.drmSystems"></a>

```csharp
public string[] DrmSystems { get; }
```

- *Type:* string[]

---

##### `EncryptionContractConfiguration`<sup>Required</sup> <a name="EncryptionContractConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference EncryptionContractConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a>

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider</a>

---


### DataAwsccMediapackagev2OriginEndpointSegmentOutputReference <a name="DataAwsccMediapackagev2OriginEndpointSegmentOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointSegmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.includeIframeOnlyStreams">IncludeIframeOnlyStreams</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.outputTimestampMode">OutputTimestampMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.scte">Scte</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.segmentDurationSeconds">SegmentDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.segmentName">SegmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.tsIncludeDvbSubtitles">TsIncludeDvbSubtitles</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.tsUseAudioRenditionGroup">TsUseAudioRenditionGroup</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegment">DataAwsccMediapackagev2OriginEndpointSegment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.encryption"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference Encryption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference</a>

---

##### `IncludeIframeOnlyStreams`<sup>Required</sup> <a name="IncludeIframeOnlyStreams" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.includeIframeOnlyStreams"></a>

```csharp
public IResolvable IncludeIframeOnlyStreams { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `OutputTimestampMode`<sup>Required</sup> <a name="OutputTimestampMode" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.outputTimestampMode"></a>

```csharp
public string OutputTimestampMode { get; }
```

- *Type:* string

---

##### `Scte`<sup>Required</sup> <a name="Scte" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.scte"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference Scte { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference</a>

---

##### `SegmentDurationSeconds`<sup>Required</sup> <a name="SegmentDurationSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.segmentDurationSeconds"></a>

```csharp
public double SegmentDurationSeconds { get; }
```

- *Type:* double

---

##### `SegmentName`<sup>Required</sup> <a name="SegmentName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.segmentName"></a>

```csharp
public string SegmentName { get; }
```

- *Type:* string

---

##### `TsIncludeDvbSubtitles`<sup>Required</sup> <a name="TsIncludeDvbSubtitles" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.tsIncludeDvbSubtitles"></a>

```csharp
public IResolvable TsIncludeDvbSubtitles { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `TsUseAudioRenditionGroup`<sup>Required</sup> <a name="TsUseAudioRenditionGroup" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.tsUseAudioRenditionGroup"></a>

```csharp
public IResolvable TsUseAudioRenditionGroup { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointSegment InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegment">DataAwsccMediapackagev2OriginEndpointSegment</a>

---


### DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference <a name="DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.customAdTypes">CustomAdTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.scteFilter">ScteFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.scteInSegments">ScteInSegments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScte">DataAwsccMediapackagev2OriginEndpointSegmentScte</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomAdTypes`<sup>Required</sup> <a name="CustomAdTypes" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.customAdTypes"></a>

```csharp
public string[] CustomAdTypes { get; }
```

- *Type:* string[]

---

##### `ScteFilter`<sup>Required</sup> <a name="ScteFilter" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.scteFilter"></a>

```csharp
public string[] ScteFilter { get; }
```

- *Type:* string[]

---

##### `ScteInSegments`<sup>Required</sup> <a name="ScteInSegments" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.scteInSegments"></a>

```csharp
public string ScteInSegments { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointSegmentScte InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScte">DataAwsccMediapackagev2OriginEndpointSegmentScte</a>

---


### DataAwsccMediapackagev2OriginEndpointTagsList <a name="DataAwsccMediapackagev2OriginEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.get"></a>

```csharp
private DataAwsccMediapackagev2OriginEndpointTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMediapackagev2OriginEndpointTagsOutputReference <a name="DataAwsccMediapackagev2OriginEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTags">DataAwsccMediapackagev2OriginEndpointTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTags">DataAwsccMediapackagev2OriginEndpointTags</a>

---



