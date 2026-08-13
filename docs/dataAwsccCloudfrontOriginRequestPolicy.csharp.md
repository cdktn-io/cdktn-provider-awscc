# `dataAwsccCloudfrontOriginRequestPolicy` Submodule <a name="`dataAwsccCloudfrontOriginRequestPolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudfrontOriginRequestPolicy <a name="DataAwsccCloudfrontOriginRequestPolicy" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudfront_origin_request_policy awscc_cloudfront_origin_request_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudfrontOriginRequestPolicy(Construct Scope, string Id, DataAwsccCloudfrontOriginRequestPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig">DataAwsccCloudfrontOriginRequestPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig">DataAwsccCloudfrontOriginRequestPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudfrontOriginRequestPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCloudfrontOriginRequestPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCloudfrontOriginRequestPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCloudfrontOriginRequestPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCloudfrontOriginRequestPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccCloudfrontOriginRequestPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCloudfrontOriginRequestPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCloudfrontOriginRequestPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudfront_origin_request_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudfrontOriginRequestPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.lastModifiedTime">LastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.originRequestPolicyConfig">OriginRequestPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.originRequestPolicyId">OriginRequestPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.lastModifiedTime"></a>

```csharp
public string LastModifiedTime { get; }
```

- *Type:* string

---

##### `OriginRequestPolicyConfig`<sup>Required</sup> <a name="OriginRequestPolicyConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.originRequestPolicyConfig"></a>

```csharp
public DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference OriginRequestPolicyConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference</a>

---

##### `OriginRequestPolicyId`<sup>Required</sup> <a name="OriginRequestPolicyId" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.originRequestPolicyId"></a>

```csharp
public string OriginRequestPolicyId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudfrontOriginRequestPolicyConfig <a name="DataAwsccCloudfrontOriginRequestPolicyConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudfrontOriginRequestPolicyConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudfront_origin_request_policy#id DataAwsccCloudfrontOriginRequestPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig {

};
```


### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig {

};
```


### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig {

};
```


### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.cookieBehavior">CookieBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.cookies">Cookies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CookieBehavior`<sup>Required</sup> <a name="CookieBehavior" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.cookieBehavior"></a>

```csharp
public string CookieBehavior { get; }
```

- *Type:* string

---

##### `Cookies`<sup>Required</sup> <a name="Cookies" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.cookies"></a>

```csharp
public string[] Cookies { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig</a>

---


### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.headerBehavior">HeaderBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.headers">Headers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderBehavior`<sup>Required</sup> <a name="HeaderBehavior" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.headerBehavior"></a>

```csharp
public string HeaderBehavior { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.headers"></a>

```csharp
public string[] Headers { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig</a>

---


### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.cookiesConfig">CookiesConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.headersConfig">HeadersConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.queryStringsConfig">QueryStringsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CookiesConfig`<sup>Required</sup> <a name="CookiesConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.cookiesConfig"></a>

```csharp
public DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference CookiesConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference</a>

---

##### `HeadersConfig`<sup>Required</sup> <a name="HeadersConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.headersConfig"></a>

```csharp
public DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference HeadersConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `QueryStringsConfig`<sup>Required</sup> <a name="QueryStringsConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.queryStringsConfig"></a>

```csharp
public DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference QueryStringsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig</a>

---


### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.queryStringBehavior">QueryStringBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.queryStrings">QueryStrings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QueryStringBehavior`<sup>Required</sup> <a name="QueryStringBehavior" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.queryStringBehavior"></a>

```csharp
public string QueryStringBehavior { get; }
```

- *Type:* string

---

##### `QueryStrings`<sup>Required</sup> <a name="QueryStrings" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.queryStrings"></a>

```csharp
public string[] QueryStrings { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig</a>

---



