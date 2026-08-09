# `dataAwsccIvschatLoggingConfiguration` Submodule <a name="`dataAwsccIvschatLoggingConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIvschatLoggingConfiguration <a name="DataAwsccIvschatLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ivschat_logging_configuration awscc_ivschat_logging_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivschatloggingconfiguration"

dataawsccivschatloggingconfiguration.NewDataAwsccIvschatLoggingConfiguration(scope Construct, id *string, config DataAwsccIvschatLoggingConfigurationConfig) DataAwsccIvschatLoggingConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationConfig">DataAwsccIvschatLoggingConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationConfig">DataAwsccIvschatLoggingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIvschatLoggingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivschatloggingconfiguration"

dataawsccivschatloggingconfiguration.DataAwsccIvschatLoggingConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivschatloggingconfiguration"

dataawsccivschatloggingconfiguration.DataAwsccIvschatLoggingConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivschatloggingconfiguration"

dataawsccivschatloggingconfiguration.DataAwsccIvschatLoggingConfiguration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivschatloggingconfiguration"

dataawsccivschatloggingconfiguration.DataAwsccIvschatLoggingConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccIvschatLoggingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccIvschatLoggingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccIvschatLoggingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ivschat_logging_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIvschatLoggingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.destinationConfiguration">DestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference">DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.loggingConfigurationId">LoggingConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsList">DataAwsccIvschatLoggingConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DestinationConfiguration`<sup>Required</sup> <a name="DestinationConfiguration" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.destinationConfiguration"></a>

```go
func DestinationConfiguration() DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference">DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference</a>

---

##### `LoggingConfigurationId`<sup>Required</sup> <a name="LoggingConfigurationId" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.loggingConfigurationId"></a>

```go
func LoggingConfigurationId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.tags"></a>

```go
func Tags() DataAwsccIvschatLoggingConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsList">DataAwsccIvschatLoggingConfigurationTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIvschatLoggingConfigurationConfig <a name="DataAwsccIvschatLoggingConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivschatloggingconfiguration"

&dataawsccivschatloggingconfiguration.DataAwsccIvschatLoggingConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ivschat_logging_configuration#id DataAwsccIvschatLoggingConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIvschatLoggingConfigurationDestinationConfiguration <a name="DataAwsccIvschatLoggingConfigurationDestinationConfiguration" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivschatloggingconfiguration"

&dataawsccivschatloggingconfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfiguration {

}
```


### DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs <a name="DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivschatloggingconfiguration"

&dataawsccivschatloggingconfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs {

}
```


### DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehose <a name="DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehose" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehose.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivschatloggingconfiguration"

&dataawsccivschatloggingconfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehose {

}
```


### DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3 <a name="DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivschatloggingconfiguration"

&dataawsccivschatloggingconfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3 {

}
```


### DataAwsccIvschatLoggingConfigurationTags <a name="DataAwsccIvschatLoggingConfigurationTags" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivschatloggingconfiguration"

&dataawsccivschatloggingconfiguration.DataAwsccIvschatLoggingConfigurationTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference <a name="DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivschatloggingconfiguration"

dataawsccivschatloggingconfiguration.NewDataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs">DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.logGroupName"></a>

```go
func LogGroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs">DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs</a>

---


### DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference <a name="DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivschatloggingconfiguration"

dataawsccivschatloggingconfiguration.NewDataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.deliveryStreamName">DeliveryStreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehose">DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehose</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeliveryStreamName`<sup>Required</sup> <a name="DeliveryStreamName" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.deliveryStreamName"></a>

```go
func DeliveryStreamName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehose
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehose">DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehose</a>

---


### DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference <a name="DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivschatloggingconfiguration"

dataawsccivschatloggingconfiguration.NewDataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference">DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.property.firehose">Firehose</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference">DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference">DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfiguration">DataAwsccIvschatLoggingConfigurationDestinationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.property.cloudwatchLogs"></a>

```go
func CloudwatchLogs() DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference">DataAwsccIvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference</a>

---

##### `Firehose`<sup>Required</sup> <a name="Firehose" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.property.firehose"></a>

```go
func Firehose() DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference">DataAwsccIvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.property.s3"></a>

```go
func S3() DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference">DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIvschatLoggingConfigurationDestinationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfiguration">DataAwsccIvschatLoggingConfigurationDestinationConfiguration</a>

---


### DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference <a name="DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivschatloggingconfiguration"

dataawsccivschatloggingconfiguration.NewDataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3">DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3">DataAwsccIvschatLoggingConfigurationDestinationConfigurationS3</a>

---


### DataAwsccIvschatLoggingConfigurationTagsList <a name="DataAwsccIvschatLoggingConfigurationTagsList" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivschatloggingconfiguration"

dataawsccivschatloggingconfiguration.NewDataAwsccIvschatLoggingConfigurationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccIvschatLoggingConfigurationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsList.get"></a>

```go
func Get(index *f64) DataAwsccIvschatLoggingConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccIvschatLoggingConfigurationTagsOutputReference <a name="DataAwsccIvschatLoggingConfigurationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivschatloggingconfiguration"

dataawsccivschatloggingconfiguration.NewDataAwsccIvschatLoggingConfigurationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccIvschatLoggingConfigurationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTags">DataAwsccIvschatLoggingConfigurationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIvschatLoggingConfigurationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvschatLoggingConfiguration.DataAwsccIvschatLoggingConfigurationTags">DataAwsccIvschatLoggingConfigurationTags</a>

---



