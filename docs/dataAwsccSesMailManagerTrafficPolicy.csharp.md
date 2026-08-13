# `dataAwsccSesMailManagerTrafficPolicy` Submodule <a name="`dataAwsccSesMailManagerTrafficPolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSesMailManagerTrafficPolicy <a name="DataAwsccSesMailManagerTrafficPolicy" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ses_mail_manager_traffic_policy awscc_ses_mail_manager_traffic_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicy(Construct Scope, string Id, DataAwsccSesMailManagerTrafficPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig">DataAwsccSesMailManagerTrafficPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig">DataAwsccSesMailManagerTrafficPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSesMailManagerTrafficPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSesMailManagerTrafficPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSesMailManagerTrafficPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSesMailManagerTrafficPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSesMailManagerTrafficPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccSesMailManagerTrafficPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSesMailManagerTrafficPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSesMailManagerTrafficPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ses_mail_manager_traffic_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSesMailManagerTrafficPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.defaultAction">DefaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.maxMessageSizeBytes">MaxMessageSizeBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.policyStatements">PolicyStatements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList">DataAwsccSesMailManagerTrafficPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.trafficPolicyArn">TrafficPolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.trafficPolicyId">TrafficPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.trafficPolicyName">TrafficPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.defaultAction"></a>

```csharp
public string DefaultAction { get; }
```

- *Type:* string

---

##### `MaxMessageSizeBytes`<sup>Required</sup> <a name="MaxMessageSizeBytes" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.maxMessageSizeBytes"></a>

```csharp
public double MaxMessageSizeBytes { get; }
```

- *Type:* double

---

##### `PolicyStatements`<sup>Required</sup> <a name="PolicyStatements" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.policyStatements"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList PolicyStatements { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.tags"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList">DataAwsccSesMailManagerTrafficPolicyTagsList</a>

---

##### `TrafficPolicyArn`<sup>Required</sup> <a name="TrafficPolicyArn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.trafficPolicyArn"></a>

```csharp
public string TrafficPolicyArn { get; }
```

- *Type:* string

---

##### `TrafficPolicyId`<sup>Required</sup> <a name="TrafficPolicyId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.trafficPolicyId"></a>

```csharp
public string TrafficPolicyId { get; }
```

- *Type:* string

---

##### `TrafficPolicyName`<sup>Required</sup> <a name="TrafficPolicyName" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.trafficPolicyName"></a>

```csharp
public string TrafficPolicyName { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSesMailManagerTrafficPolicyConfig <a name="DataAwsccSesMailManagerTrafficPolicyConfig" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ses_mail_manager_traffic_policy#id DataAwsccSesMailManagerTrafficPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSesMailManagerTrafficPolicyPolicyStatements <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatements" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatements.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatements {

};
```


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditions <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditions" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditions {

};
```


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression {

};
```


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate {

};
```


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis {

};
```


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct {

};
```


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression {

};
```


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate {

};
```


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression {

};
```


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate {

};
```


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression {

};
```


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate {

};
```


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis {

};
```


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression {

};
```


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate {

};
```


### DataAwsccSesMailManagerTrafficPolicyTags <a name="DataAwsccSesMailManagerTrafficPolicyTags" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.analyzer">Analyzer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.resultField">ResultField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Analyzer`<sup>Required</sup> <a name="Analyzer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.analyzer"></a>

```csharp
public string Analyzer { get; }
```

- *Type:* string

---

##### `ResultField`<sup>Required</sup> <a name="ResultField" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.resultField"></a>

```csharp
public string ResultField { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis</a>

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressLists">AddressLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressLists`<sup>Required</sup> <a name="AddressLists" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressLists"></a>

```csharp
public string[] AddressLists { get; }
```

- *Type:* string[]

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct</a>

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.analysis">Analysis</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.isInAddressList">IsInAddressList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Analysis`<sup>Required</sup> <a name="Analysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.analysis"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference Analysis { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference</a>

---

##### `IsInAddressList`<sup>Required</sup> <a name="IsInAddressList" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.isInAddressList"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference IsInAddressList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate</a>

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.evaluate">Evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Evaluate`<sup>Required</sup> <a name="Evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.evaluate"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference Evaluate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference</a>

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression</a>

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate</a>

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.evaluate">Evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Evaluate`<sup>Required</sup> <a name="Evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.evaluate"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference Evaluate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference</a>

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression</a>

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate</a>

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.evaluate">Evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Evaluate`<sup>Required</sup> <a name="Evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.evaluate"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference Evaluate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference</a>

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression</a>

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.get"></a>

```csharp
private DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.booleanExpression">BooleanExpression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.ipExpression">IpExpression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.ipv6Expression">Ipv6Expression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.stringExpression">StringExpression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.tlsExpression">TlsExpression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditions">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BooleanExpression`<sup>Required</sup> <a name="BooleanExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.booleanExpression"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference BooleanExpression { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference</a>

---

##### `IpExpression`<sup>Required</sup> <a name="IpExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.ipExpression"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference IpExpression { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference</a>

---

##### `Ipv6Expression`<sup>Required</sup> <a name="Ipv6Expression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.ipv6Expression"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference Ipv6Expression { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference</a>

---

##### `StringExpression`<sup>Required</sup> <a name="StringExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.stringExpression"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference StringExpression { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference</a>

---

##### `TlsExpression`<sup>Required</sup> <a name="TlsExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.tlsExpression"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference TlsExpression { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditions">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditions</a>

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.analyzer">Analyzer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.resultField">ResultField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Analyzer`<sup>Required</sup> <a name="Analyzer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.analyzer"></a>

```csharp
public string Analyzer { get; }
```

- *Type:* string

---

##### `ResultField`<sup>Required</sup> <a name="ResultField" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.resultField"></a>

```csharp
public string ResultField { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis</a>

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.analysis">Analysis</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Analysis`<sup>Required</sup> <a name="Analysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.analysis"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference Analysis { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference</a>

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate</a>

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.evaluate">Evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Evaluate`<sup>Required</sup> <a name="Evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.evaluate"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference Evaluate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference</a>

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression</a>

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate</a>

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.evaluate">Evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Evaluate`<sup>Required</sup> <a name="Evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.evaluate"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference Evaluate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference</a>

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression</a>

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.get"></a>

```csharp
private DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatements">DataAwsccSesMailManagerTrafficPolicyPolicyStatements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.conditions"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyPolicyStatements InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatements">DataAwsccSesMailManagerTrafficPolicyPolicyStatements</a>

---


### DataAwsccSesMailManagerTrafficPolicyTagsList <a name="DataAwsccSesMailManagerTrafficPolicyTagsList" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.get"></a>

```csharp
private DataAwsccSesMailManagerTrafficPolicyTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSesMailManagerTrafficPolicyTagsOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesMailManagerTrafficPolicyTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTags">DataAwsccSesMailManagerTrafficPolicyTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesMailManagerTrafficPolicyTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTags">DataAwsccSesMailManagerTrafficPolicyTags</a>

---



