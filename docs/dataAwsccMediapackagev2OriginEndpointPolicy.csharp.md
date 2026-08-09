# `dataAwsccMediapackagev2OriginEndpointPolicy` Submodule <a name="`dataAwsccMediapackagev2OriginEndpointPolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediapackagev2OriginEndpointPolicy <a name="DataAwsccMediapackagev2OriginEndpointPolicy" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mediapackagev2_origin_endpoint_policy awscc_mediapackagev2_origin_endpoint_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointPolicy(Construct Scope, string Id, DataAwsccMediapackagev2OriginEndpointPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig">DataAwsccMediapackagev2OriginEndpointPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig">DataAwsccMediapackagev2OriginEndpointPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMediapackagev2OriginEndpointPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMediapackagev2OriginEndpointPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMediapackagev2OriginEndpointPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMediapackagev2OriginEndpointPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMediapackagev2OriginEndpointPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccMediapackagev2OriginEndpointPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMediapackagev2OriginEndpointPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMediapackagev2OriginEndpointPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mediapackagev2_origin_endpoint_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediapackagev2OriginEndpointPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.cdnAuthConfiguration">CdnAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.channelGroupName">ChannelGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.channelName">ChannelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.originEndpointName">OriginEndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CdnAuthConfiguration`<sup>Required</sup> <a name="CdnAuthConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.cdnAuthConfiguration"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference CdnAuthConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference</a>

---

##### `ChannelGroupName`<sup>Required</sup> <a name="ChannelGroupName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.channelGroupName"></a>

```csharp
public string ChannelGroupName { get; }
```

- *Type:* string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.channelName"></a>

```csharp
public string ChannelName { get; }
```

- *Type:* string

---

##### `OriginEndpointName`<sup>Required</sup> <a name="OriginEndpointName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.originEndpointName"></a>

```csharp
public string OriginEndpointName { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfiguration <a name="DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfiguration {

};
```


### DataAwsccMediapackagev2OriginEndpointPolicyConfig <a name="DataAwsccMediapackagev2OriginEndpointPolicyConfig" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointPolicyConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mediapackagev2_origin_endpoint_policy#id DataAwsccMediapackagev2OriginEndpointPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.cdnIdentifierSecretArns">CdnIdentifierSecretArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.secretsRoleArn">SecretsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfiguration">DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CdnIdentifierSecretArns`<sup>Required</sup> <a name="CdnIdentifierSecretArns" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.cdnIdentifierSecretArns"></a>

```csharp
public string[] CdnIdentifierSecretArns { get; }
```

- *Type:* string[]

---

##### `SecretsRoleArn`<sup>Required</sup> <a name="SecretsRoleArn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.secretsRoleArn"></a>

```csharp
public string SecretsRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfiguration">DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfiguration</a>

---



