# `dataAwsccComprehendEntityRecognizerEndpoint` Submodule <a name="`dataAwsccComprehendEntityRecognizerEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccComprehendEntityRecognizerEndpoint <a name="DataAwsccComprehendEntityRecognizerEndpoint" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/comprehend_entity_recognizer_endpoint awscc_comprehend_entity_recognizer_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComprehendEntityRecognizerEndpoint(Construct Scope, string Id, DataAwsccComprehendEntityRecognizerEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig">DataAwsccComprehendEntityRecognizerEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig">DataAwsccComprehendEntityRecognizerEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccComprehendEntityRecognizerEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccComprehendEntityRecognizerEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccComprehendEntityRecognizerEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccComprehendEntityRecognizerEndpoint.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccComprehendEntityRecognizerEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccComprehendEntityRecognizerEndpoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccComprehendEntityRecognizerEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccComprehendEntityRecognizerEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/comprehend_entity_recognizer_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccComprehendEntityRecognizerEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.currentInferenceUnits">CurrentInferenceUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.dataAccessRoleArn">DataAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.desiredInferenceUnits">DesiredInferenceUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.endpointName">EndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.endpointStatus">EndpointStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.flywheelArn">FlywheelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.lastModifiedTime">LastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.modelArn">ModelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList">DataAwsccComprehendEntityRecognizerEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `CurrentInferenceUnits`<sup>Required</sup> <a name="CurrentInferenceUnits" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.currentInferenceUnits"></a>

```csharp
public double CurrentInferenceUnits { get; }
```

- *Type:* double

---

##### `DataAccessRoleArn`<sup>Required</sup> <a name="DataAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.dataAccessRoleArn"></a>

```csharp
public string DataAccessRoleArn { get; }
```

- *Type:* string

---

##### `DesiredInferenceUnits`<sup>Required</sup> <a name="DesiredInferenceUnits" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.desiredInferenceUnits"></a>

```csharp
public double DesiredInferenceUnits { get; }
```

- *Type:* double

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.endpointName"></a>

```csharp
public string EndpointName { get; }
```

- *Type:* string

---

##### `EndpointStatus`<sup>Required</sup> <a name="EndpointStatus" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.endpointStatus"></a>

```csharp
public string EndpointStatus { get; }
```

- *Type:* string

---

##### `FlywheelArn`<sup>Required</sup> <a name="FlywheelArn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.flywheelArn"></a>

```csharp
public string FlywheelArn { get; }
```

- *Type:* string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.lastModifiedTime"></a>

```csharp
public string LastModifiedTime { get; }
```

- *Type:* string

---

##### `ModelArn`<sup>Required</sup> <a name="ModelArn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.modelArn"></a>

```csharp
public string ModelArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.tags"></a>

```csharp
public DataAwsccComprehendEntityRecognizerEndpointTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList">DataAwsccComprehendEntityRecognizerEndpointTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccComprehendEntityRecognizerEndpointConfig <a name="DataAwsccComprehendEntityRecognizerEndpointConfig" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComprehendEntityRecognizerEndpointConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/comprehend_entity_recognizer_endpoint#id DataAwsccComprehendEntityRecognizerEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccComprehendEntityRecognizerEndpointTags <a name="DataAwsccComprehendEntityRecognizerEndpointTags" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComprehendEntityRecognizerEndpointTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccComprehendEntityRecognizerEndpointTagsList <a name="DataAwsccComprehendEntityRecognizerEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComprehendEntityRecognizerEndpointTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.get"></a>

```csharp
private DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference <a name="DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTags">DataAwsccComprehendEntityRecognizerEndpointTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccComprehendEntityRecognizerEndpointTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTags">DataAwsccComprehendEntityRecognizerEndpointTags</a>

---



