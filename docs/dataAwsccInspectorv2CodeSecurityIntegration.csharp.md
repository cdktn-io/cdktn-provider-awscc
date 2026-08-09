# `dataAwsccInspectorv2CodeSecurityIntegration` Submodule <a name="`dataAwsccInspectorv2CodeSecurityIntegration` Submodule" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccInspectorv2CodeSecurityIntegration <a name="DataAwsccInspectorv2CodeSecurityIntegration" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/inspectorv2_code_security_integration awscc_inspectorv2_code_security_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CodeSecurityIntegration(Construct Scope, string Id, DataAwsccInspectorv2CodeSecurityIntegrationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig">DataAwsccInspectorv2CodeSecurityIntegrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig">DataAwsccInspectorv2CodeSecurityIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccInspectorv2CodeSecurityIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccInspectorv2CodeSecurityIntegration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccInspectorv2CodeSecurityIntegration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccInspectorv2CodeSecurityIntegration.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccInspectorv2CodeSecurityIntegration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccInspectorv2CodeSecurityIntegration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccInspectorv2CodeSecurityIntegration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccInspectorv2CodeSecurityIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/inspectorv2_code_security_integration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccInspectorv2CodeSecurityIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.authorizationUrl">AuthorizationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.createIntegrationDetails">CreateIntegrationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference">DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.statusReason">StatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.updateIntegrationDetails">UpdateIntegrationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AuthorizationUrl`<sup>Required</sup> <a name="AuthorizationUrl" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.authorizationUrl"></a>

```csharp
public string AuthorizationUrl { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CreateIntegrationDetails`<sup>Required</sup> <a name="CreateIntegrationDetails" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.createIntegrationDetails"></a>

```csharp
public DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference CreateIntegrationDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference">DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference</a>

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.lastUpdatedAt"></a>

```csharp
public string LastUpdatedAt { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.statusReason"></a>

```csharp
public string StatusReason { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdateIntegrationDetails`<sup>Required</sup> <a name="UpdateIntegrationDetails" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.updateIntegrationDetails"></a>

```csharp
public DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference UpdateIntegrationDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccInspectorv2CodeSecurityIntegrationConfig <a name="DataAwsccInspectorv2CodeSecurityIntegrationConfig" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CodeSecurityIntegrationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/inspectorv2_code_security_integration#id DataAwsccInspectorv2CodeSecurityIntegration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails <a name="DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails {

};
```


### DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged <a name="DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged {

};
```


### DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails <a name="DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails {

};
```


### DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub <a name="DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub {

};
```


### DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged <a name="DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference <a name="DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.accessToken">AccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.instanceUrl">InstanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged">DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.accessToken"></a>

```csharp
public string AccessToken { get; }
```

- *Type:* string

---

##### `InstanceUrl`<sup>Required</sup> <a name="InstanceUrl" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.instanceUrl"></a>

```csharp
public string InstanceUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged">DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged</a>

---


### DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference <a name="DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.gitlabSelfManaged">GitlabSelfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference">DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails">DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GitlabSelfManaged`<sup>Required</sup> <a name="GitlabSelfManaged" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.gitlabSelfManaged"></a>

```csharp
public DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference GitlabSelfManaged { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference">DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails">DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a>

---


### DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference <a name="DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.installationId">InstallationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `InstallationId`<sup>Required</sup> <a name="InstallationId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.installationId"></a>

```csharp
public string InstallationId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub</a>

---


### DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference <a name="DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.authCode">AuthCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthCode`<sup>Required</sup> <a name="AuthCode" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.authCode"></a>

```csharp
public string AuthCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged</a>

---


### DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference <a name="DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.github">Github</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.gitlabSelfManaged">GitlabSelfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Github`<sup>Required</sup> <a name="Github" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.github"></a>

```csharp
public DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference Github { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference</a>

---

##### `GitlabSelfManaged`<sup>Required</sup> <a name="GitlabSelfManaged" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.gitlabSelfManaged"></a>

```csharp
public DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference GitlabSelfManaged { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a>

---



