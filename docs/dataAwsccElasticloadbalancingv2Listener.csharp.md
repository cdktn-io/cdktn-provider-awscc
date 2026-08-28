# `dataAwsccElasticloadbalancingv2Listener` Submodule <a name="`dataAwsccElasticloadbalancingv2Listener` Submodule" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccElasticloadbalancingv2Listener <a name="DataAwsccElasticloadbalancingv2Listener" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticloadbalancingv2_listener awscc_elasticloadbalancingv2_listener}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2Listener(Construct Scope, string Id, DataAwsccElasticloadbalancingv2ListenerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig">DataAwsccElasticloadbalancingv2ListenerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig">DataAwsccElasticloadbalancingv2ListenerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccElasticloadbalancingv2Listener resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccElasticloadbalancingv2Listener.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccElasticloadbalancingv2Listener.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccElasticloadbalancingv2Listener.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccElasticloadbalancingv2Listener.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccElasticloadbalancingv2Listener resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccElasticloadbalancingv2Listener to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccElasticloadbalancingv2Listener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticloadbalancingv2_listener#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccElasticloadbalancingv2Listener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.alpnPolicy">AlpnPolicy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.certificates">Certificates</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList">DataAwsccElasticloadbalancingv2ListenerCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.defaultActions">DefaultActions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList">DataAwsccElasticloadbalancingv2ListenerDefaultActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.listenerArn">ListenerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.listenerAttributes">ListenerAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList">DataAwsccElasticloadbalancingv2ListenerListenerAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.loadBalancerArn">LoadBalancerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.mutualAuthentication">MutualAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference">DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.sslPolicy">SslPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList">DataAwsccElasticloadbalancingv2ListenerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AlpnPolicy`<sup>Required</sup> <a name="AlpnPolicy" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.alpnPolicy"></a>

```csharp
public string[] AlpnPolicy { get; }
```

- *Type:* string[]

---

##### `Certificates`<sup>Required</sup> <a name="Certificates" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.certificates"></a>

```csharp
public DataAwsccElasticloadbalancingv2ListenerCertificatesList Certificates { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList">DataAwsccElasticloadbalancingv2ListenerCertificatesList</a>

---

##### `DefaultActions`<sup>Required</sup> <a name="DefaultActions" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.defaultActions"></a>

```csharp
public DataAwsccElasticloadbalancingv2ListenerDefaultActionsList DefaultActions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList">DataAwsccElasticloadbalancingv2ListenerDefaultActionsList</a>

---

##### `ListenerArn`<sup>Required</sup> <a name="ListenerArn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.listenerArn"></a>

```csharp
public string ListenerArn { get; }
```

- *Type:* string

---

##### `ListenerAttributes`<sup>Required</sup> <a name="ListenerAttributes" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.listenerAttributes"></a>

```csharp
public DataAwsccElasticloadbalancingv2ListenerListenerAttributesList ListenerAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList">DataAwsccElasticloadbalancingv2ListenerListenerAttributesList</a>

---

##### `LoadBalancerArn`<sup>Required</sup> <a name="LoadBalancerArn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.loadBalancerArn"></a>

```csharp
public string LoadBalancerArn { get; }
```

- *Type:* string

---

##### `MutualAuthentication`<sup>Required</sup> <a name="MutualAuthentication" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.mutualAuthentication"></a>

```csharp
public DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference MutualAuthentication { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference">DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `SslPolicy`<sup>Required</sup> <a name="SslPolicy" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.sslPolicy"></a>

```csharp
public string SslPolicy { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.tags"></a>

```csharp
public DataAwsccElasticloadbalancingv2ListenerTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList">DataAwsccElasticloadbalancingv2ListenerTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccElasticloadbalancingv2ListenerCertificates <a name="DataAwsccElasticloadbalancingv2ListenerCertificates" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificates.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerCertificates {

};
```


### DataAwsccElasticloadbalancingv2ListenerConfig <a name="DataAwsccElasticloadbalancingv2ListenerConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticloadbalancingv2_listener#id DataAwsccElasticloadbalancingv2Listener#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccElasticloadbalancingv2ListenerDefaultActions <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActions" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerDefaultActions {

};
```


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig {

};
```


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig {

};
```


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig {

};
```


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig {

};
```


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups {

};
```


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig {

};
```


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig {

};
```


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims {

};
```


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig {

};
```


### DataAwsccElasticloadbalancingv2ListenerListenerAttributes <a name="DataAwsccElasticloadbalancingv2ListenerListenerAttributes" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerListenerAttributes {

};
```


### DataAwsccElasticloadbalancingv2ListenerMutualAuthentication <a name="DataAwsccElasticloadbalancingv2ListenerMutualAuthentication" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthentication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerMutualAuthentication {

};
```


### DataAwsccElasticloadbalancingv2ListenerTags <a name="DataAwsccElasticloadbalancingv2ListenerTags" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccElasticloadbalancingv2ListenerCertificatesList <a name="DataAwsccElasticloadbalancingv2ListenerCertificatesList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerCertificatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.get"></a>

```csharp
private DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificates">DataAwsccElasticloadbalancingv2ListenerCertificates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticloadbalancingv2ListenerCertificates InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificates">DataAwsccElasticloadbalancingv2ListenerCertificates</a>

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieName">SessionCookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeout">SessionTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolArn">UserPoolArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientId">UserPoolClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomain">UserPoolDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationRequestExtraParams`<sup>Required</sup> <a name="AuthenticationRequestExtraParams" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParams"></a>

```csharp
public StringMap AuthenticationRequestExtraParams { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `OnUnauthenticatedRequest`<sup>Required</sup> <a name="OnUnauthenticatedRequest" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequest"></a>

```csharp
public string OnUnauthenticatedRequest { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `SessionCookieName`<sup>Required</sup> <a name="SessionCookieName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieName"></a>

```csharp
public string SessionCookieName { get; }
```

- *Type:* string

---

##### `SessionTimeout`<sup>Required</sup> <a name="SessionTimeout" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeout"></a>

```csharp
public string SessionTimeout { get; }
```

- *Type:* string

---

##### `UserPoolArn`<sup>Required</sup> <a name="UserPoolArn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolArn"></a>

```csharp
public string UserPoolArn { get; }
```

- *Type:* string

---

##### `UserPoolClientId`<sup>Required</sup> <a name="UserPoolClientId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientId"></a>

```csharp
public string UserPoolClientId { get; }
```

- *Type:* string

---

##### `UserPoolDomain`<sup>Required</sup> <a name="UserPoolDomain" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomain"></a>

```csharp
public string UserPoolDomain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionCookieName">SessionCookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionTimeout">SessionTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecret">UseExistingClientSecret</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpoint">UserInfoEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationRequestExtraParams`<sup>Required</sup> <a name="AuthenticationRequestExtraParams" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParams"></a>

```csharp
public StringMap AuthenticationRequestExtraParams { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpoint"></a>

```csharp
public string AuthorizationEndpoint { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `OnUnauthenticatedRequest`<sup>Required</sup> <a name="OnUnauthenticatedRequest" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequest"></a>

```csharp
public string OnUnauthenticatedRequest { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `SessionCookieName`<sup>Required</sup> <a name="SessionCookieName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionCookieName"></a>

```csharp
public string SessionCookieName { get; }
```

- *Type:* string

---

##### `SessionTimeout`<sup>Required</sup> <a name="SessionTimeout" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionTimeout"></a>

```csharp
public string SessionTimeout { get; }
```

- *Type:* string

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; }
```

- *Type:* string

---

##### `UseExistingClientSecret`<sup>Required</sup> <a name="UseExistingClientSecret" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecret"></a>

```csharp
public IResolvable UseExistingClientSecret { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `UserInfoEndpoint`<sup>Required</sup> <a name="UserInfoEndpoint" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpoint"></a>

```csharp
public string UserInfoEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.messageBody">MessageBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.statusCode">StatusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `MessageBody`<sup>Required</sup> <a name="MessageBody" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.messageBody"></a>

```csharp
public string MessageBody { get; }
```

- *Type:* string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.statusCode"></a>

```csharp
public string StatusCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroups">TargetGroups</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroupStickinessConfig">TargetGroupStickinessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetGroups`<sup>Required</sup> <a name="TargetGroups" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroups"></a>

```csharp
public DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList TargetGroups { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList</a>

---

##### `TargetGroupStickinessConfig`<sup>Required</sup> <a name="TargetGroupStickinessConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroupStickinessConfig"></a>

```csharp
public DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference TargetGroupStickinessConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.get"></a>

```csharp
private DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArn">TargetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetGroupArn`<sup>Required</sup> <a name="TargetGroupArn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArn"></a>

```csharp
public string TargetGroupArn { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a>

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSeconds">DurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DurationSeconds`<sup>Required</sup> <a name="DurationSeconds" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSeconds"></a>

```csharp
public double DurationSeconds { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.get"></a>

```csharp
private DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a>

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.additionalClaims">AdditionalClaims</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList">DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.jwksEndpoint">JwksEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalClaims`<sup>Required</sup> <a name="AdditionalClaims" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.additionalClaims"></a>

```csharp
public DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList AdditionalClaims { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList">DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList</a>

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `JwksEndpoint`<sup>Required</sup> <a name="JwksEndpoint" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.jwksEndpoint"></a>

```csharp
public string JwksEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsList <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerDefaultActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.get"></a>

```csharp
private DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateCognitoConfig">AuthenticateCognitoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateOidcConfig">AuthenticateOidcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fixedResponseConfig">FixedResponseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.forwardConfig">ForwardConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.jwtValidationConfig">JwtValidationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.order">Order</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.redirectConfig">RedirectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.targetGroupArn">TargetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActions">DataAwsccElasticloadbalancingv2ListenerDefaultActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticateCognitoConfig`<sup>Required</sup> <a name="AuthenticateCognitoConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateCognitoConfig"></a>

```csharp
public DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference AuthenticateCognitoConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference</a>

---

##### `AuthenticateOidcConfig`<sup>Required</sup> <a name="AuthenticateOidcConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateOidcConfig"></a>

```csharp
public DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference AuthenticateOidcConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference</a>

---

##### `FixedResponseConfig`<sup>Required</sup> <a name="FixedResponseConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fixedResponseConfig"></a>

```csharp
public DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference FixedResponseConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference</a>

---

##### `ForwardConfig`<sup>Required</sup> <a name="ForwardConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.forwardConfig"></a>

```csharp
public DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference ForwardConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference</a>

---

##### `JwtValidationConfig`<sup>Required</sup> <a name="JwtValidationConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.jwtValidationConfig"></a>

```csharp
public DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference JwtValidationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference</a>

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.order"></a>

```csharp
public double Order { get; }
```

- *Type:* double

---

##### `RedirectConfig`<sup>Required</sup> <a name="RedirectConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.redirectConfig"></a>

```csharp
public DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference RedirectConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference</a>

---

##### `TargetGroupArn`<sup>Required</sup> <a name="TargetGroupArn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.targetGroupArn"></a>

```csharp
public string TargetGroupArn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticloadbalancingv2ListenerDefaultActions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActions">DataAwsccElasticloadbalancingv2ListenerDefaultActions</a>

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.statusCode">StatusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.statusCode"></a>

```csharp
public string StatusCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerListenerAttributesList <a name="DataAwsccElasticloadbalancingv2ListenerListenerAttributesList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerListenerAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.get"></a>

```csharp
private DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributes">DataAwsccElasticloadbalancingv2ListenerListenerAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticloadbalancingv2ListenerListenerAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributes">DataAwsccElasticloadbalancingv2ListenerListenerAttributes</a>

---


### DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.advertiseTrustStoreCaNames">AdvertiseTrustStoreCaNames</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.ignoreClientCertificateExpiry">IgnoreClientCertificateExpiry</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.trustStoreArn">TrustStoreArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthentication">DataAwsccElasticloadbalancingv2ListenerMutualAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdvertiseTrustStoreCaNames`<sup>Required</sup> <a name="AdvertiseTrustStoreCaNames" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.advertiseTrustStoreCaNames"></a>

```csharp
public string AdvertiseTrustStoreCaNames { get; }
```

- *Type:* string

---

##### `IgnoreClientCertificateExpiry`<sup>Required</sup> <a name="IgnoreClientCertificateExpiry" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.ignoreClientCertificateExpiry"></a>

```csharp
public IResolvable IgnoreClientCertificateExpiry { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `TrustStoreArn`<sup>Required</sup> <a name="TrustStoreArn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.trustStoreArn"></a>

```csharp
public string TrustStoreArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticloadbalancingv2ListenerMutualAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthentication">DataAwsccElasticloadbalancingv2ListenerMutualAuthentication</a>

---


### DataAwsccElasticloadbalancingv2ListenerTagsList <a name="DataAwsccElasticloadbalancingv2ListenerTagsList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.get"></a>

```csharp
private DataAwsccElasticloadbalancingv2ListenerTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccElasticloadbalancingv2ListenerTagsOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticloadbalancingv2ListenerTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTags">DataAwsccElasticloadbalancingv2ListenerTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticloadbalancingv2ListenerTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTags">DataAwsccElasticloadbalancingv2ListenerTags</a>

---



